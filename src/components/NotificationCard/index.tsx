import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import { ContainerNotification } from "./styles";
import { colors } from "../../constants/colors";
import { globalStyle } from "../../styles/global";

interface Props {
    children: React.ReactNode
}

export function NotificationCard({ children }: Props) {
    const { height, width } = Dimensions.get("screen")
    const widthBar = width * 0.8
    const fadeAnim = useRef(new Animated.Value(height)).current;
    const [progress, setProgress] = useState(new Animated.Value(widthBar - 48));

    useEffect(() => {
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
    }, [fadeAnim]);

    return (
        <Animated.View
            style={[styles.container, globalStyle.shadow, {
                width: widthBar,
                transform: [{
                    translateY: fadeAnim
                }]
            }]}>
            <ContainerNotification>
                {children}
            </ContainerNotification>
            <Animated.View style={[styles.bar, { width: progress }]} />
        </Animated.View>
    )
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