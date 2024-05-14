import { Easing } from "react-native";
import { IconNames } from "../../../../assets/icons";
import Icon from "../../../Icon";
import { colors } from "../../../../constants/colors";
import { Animated } from "react-native";
import { useEffect, useRef } from "react";

interface Props {
    onPress: () => void
    inCart: boolean
}

export function Loader() {
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 10000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start()
    }, [rotateAnim]);

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '980deg']
    })

    return (
        <Animated.View
            style={{
                transform: [{
                    rotateZ: spin
                }]
            }}>
            <Icon iconName={IconNames.LOADER_ICON} />
        </Animated.View>
    )
}