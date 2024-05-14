import { IconNames } from "../../../../assets/icons";
import Icon from "../../../Icon";
import { ContainerButton } from "./styles";
import { colors } from "../../../../constants/colors";
import { useEffect, useRef } from "react";
import { Loader } from "../Loader";

interface Props {
    onPress: () => void
    inCart: boolean
}

export function ButtonActionCard({ onPress }: Props) {

    return (
        <ContainerButton
            onPress={onPress}
        >
            {

            }
            {/* <Icon iconName={IconNames.SHOPPING_CART_ICON} /> */}
            <Loader />

        </ContainerButton>
    )
}