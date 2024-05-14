import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Platform, Text, View } from "react-native";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { NotificationCard } from "../components/NotificationCard";

interface INotificationContext {
    expoPushToken: string
    showNotification: (title: string, description: string) => void
}

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

const NotificationContext = createContext({} as INotificationContext)

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [channels, setChannels] = useState<Notifications.NotificationChannel[]>(
        [],
    );
    const [notification, setNotification] = useState<
        Notifications.Notification | undefined
    >(undefined);
    const notificationListener = useRef<Notifications.Subscription>();
    const responseListener = useRef<Notifications.Subscription>();
    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()

    const showNotification = (title: string, description: string) => {
        setTitle(title)
        setDescription(description)
    }

    useEffect(() => {
        registerForPushNotificationsAsync().then(
            (token) => token && setExpoPushToken(token),
        );

        if (Platform.OS === 'android') {
            Notifications.getNotificationChannelsAsync().then((value) =>
                setChannels(value ?? []),
            );
        }
        notificationListener.current =
            Notifications.addNotificationReceivedListener((notification) => {
                setNotification(notification);
            });

        responseListener.current =
            Notifications.addNotificationResponseReceivedListener((response) => {
                console.log(response);
            });

        return () => {
            notificationListener.current &&
                Notifications.removeNotificationSubscription(
                    notificationListener.current,
                );
            responseListener.current &&
                Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    return (
        <NotificationContext.Provider value={{ expoPushToken, showNotification }}>
            {children}
            {title &&
                <NotificationCard>
                    <Text>{title}</Text>
                </NotificationCard>
            }


        </NotificationContext.Provider>
    )
}

export function useNotification() {
    const context = useContext(NotificationContext)
    return context
}

async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } =
            await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }

        try {
            const projectId =
                Constants?.expoConfig?.extra?.eas?.projectId ??
                Constants?.easConfig?.projectId;
            if (!projectId) {
                throw new Error('Project ID not found');
            }
            token = (
                await Notifications.getExpoPushTokenAsync({
                    projectId,
                })
            ).data;
            console.log(token);
        } catch (e) {
            token = `${e}`;
        }
    } else {
        //alert('Must use physical device for Push Notifications');
    }

    return token;
}