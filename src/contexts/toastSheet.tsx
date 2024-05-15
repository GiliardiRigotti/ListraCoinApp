import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text } from "react-native";
import { colors } from "../constants/colors";
import { globalStyle } from "../styles/global";
import { ContainerNotification } from "../components/NotificationCard/styles";

interface IToastSheetContext {
    showNotification: (title: string, description: string) => void
}


const ToastSheetContext = createContext({} as IToastSheetContext)

export const ToastSheetProvider = ({ children }: { children: React.ReactNode }) => {
    const { height, width } = Dimensions.get("screen")
    const widthBar = width * 0.8
    const fadeAnim = useRef(new Animated.Value(height)).current;
    const [progress, setProgress] = useState(new Animated.Value(widthBar - 48));
    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()

    const showNotification = (title: string, description: string) => {
        setTitle(title)
        setDescription(description)

    }

    useEffect(() => {
        if (!!title && !!description) {
            console.log(title, description)
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: height - 100,
                    duration: 2000,
                    useNativeDriver: false,
                }),
                Animated.timing(progress, {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: false,
                }),
                Animated.timing(fadeAnim, {
                    toValue: height,
                    duration: 2000,
                    useNativeDriver: false,
                }),
                Animated.timing(progress, {
                    toValue: widthBar - 48,
                    duration: 2000,
                    useNativeDriver: false,
                }),
            ]).start()
        }
    }, [title, description])


    return (
        <ToastSheetContext.Provider value={{ showNotification }}>
            {children}
            {
                title && description && (
                    <Animated.View
                        style={[styles.container, globalStyle.shadow, {
                            width: widthBar,
                            transform: [{
                                translateY: fadeAnim
                            }]
                        }]}>
                        <ContainerNotification>
                            <Text
                                style={{
                                    fontFamily: 'Sora-Semibold',
                                    fontSize: 16,
                                    color: colors.black
                                }}
                            >{title}</Text>
                            <Text
                                style={{
                                    fontFamily: 'Sora-Regular',
                                    fontSize: 10,
                                    color: colors.grey
                                }}
                            >{description}</Text>
                        </ContainerNotification>
                        <Animated.View style={[styles.bar, { width: progress }]} />
                    </Animated.View>
                )
            }

        </ToastSheetContext.Provider>
    )
}

export function useToastNotification() {
    const context = useContext(ToastSheetContext)
    return context
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderRadius: 24,
        height: 85,
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: 'row'
    },
    bar: {
        height: 4,
        backgroundColor: colors.purple,
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
});