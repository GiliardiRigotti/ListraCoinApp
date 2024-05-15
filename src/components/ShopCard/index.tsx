import { useState } from "react";
import { useCart } from "../../contexts/cart";
import { useNotification } from "../../contexts/notification";
import { useProfile } from "../../contexts/profile";
import { useToastNotification } from "../../contexts/toastSheet";
import { IProduct } from "../../interfaces/shop";
import { globalStyle } from "../../styles/global";
import { ButtonActionCard } from "./components/ButtonActionCard";
import { ContainerCard, DescriptionCard, FooterCard, HeaderCard, ImageCard, PriceCard, SubContainerCard, TitleCard, ValueCard, ValueSymbolCard } from "./styles";

interface Props {
    product: IProduct
}

export function ShopCard({ product }: Props) {
    const { showNotification } = useToastNotification()
    const { addItemCart, removeItemCart, isLoading } = useCart()
    const [inCart, setInCart] = useState(false)

    const handleInCart = () => {
        if (!inCart) {
            addItemCart(product)
            setInCart(true)
            showNotification(`O ${product.nome} está à caminho! 🥳`, '🎁 Parabéns, sua compra foi confirmada!')
            return
        }
    }

    return (
        <ContainerCard
            style={globalStyle.shadow}
        >
            <ImageCard
                source={{ uri: product.imagem }}
                resizeMode='contain'
            />
            <SubContainerCard>
                <HeaderCard>
                    <TitleCard>
                        {product.nome}
                    </TitleCard>
                    <DescriptionCard>
                        {product.quantidade} unidades
                    </DescriptionCard>
                </HeaderCard>
                <FooterCard>
                    <PriceCard>
                        <ValueSymbolCard>
                            Lc
                        </ValueSymbolCard>
                        <ValueCard>
                            {product.preco.toFixed(2)}
                        </ValueCard>
                    </PriceCard>
                    <ButtonActionCard
                        onPress={handleInCart}
                        inCart={inCart}
                        isLoading={isLoading}
                    />
                </FooterCard>
            </SubContainerCard>
        </ContainerCard>
    )
}