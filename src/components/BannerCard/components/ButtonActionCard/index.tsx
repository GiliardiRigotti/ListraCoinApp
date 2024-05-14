import { IconNames } from "../../../../assets/icons";
import Icon from "../../../Icon";
import { ContainerButton } from "./styles";
import { colors } from "../../../../constants/colors";
import { useEffect, useRef } from "react";
import { Loader } from "../Loader";

interface Props {
    onPress: () => void
    inCart: boolean
    isLoading: boolean
}

export function ButtonActionCard({ onPress, inCart, isLoading }: Props) {

    return (
        <ContainerButton
            onPress={onPress}
        >
            {isLoading ?
                <Loader />
                :
                !inCart ?
                    <Icon iconName={IconNames.SHOPPING_CART_ICON} />
                    :
                    <Icon iconName={IconNames.CHECK_ICON} />
            }

        </ContainerButton>
    )
}