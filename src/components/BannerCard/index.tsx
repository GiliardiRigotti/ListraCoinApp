import { useState } from "react";
import { useCart } from "../../contexts/cart";
import { useNotification } from "../../contexts/notification";
import { useProfile } from "../../contexts/profile";
import { useToastNotification } from "../../contexts/toastSheet";
import { IProduct } from "../../interfaces/shop";
import { globalStyle } from "../../styles/global";
import { ButtonActionCard } from "./components/ButtonActionCard";
import { ContainerCard, ImageCard } from "./styles";

interface Props {
    product: IProduct
}

export function BannerCard() {


    return (
        <ImageCard
            source={require('../../assets/imgs/banner.png')}
        />
    )
}