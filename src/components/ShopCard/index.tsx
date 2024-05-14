import { useNotification } from "../../contexts/notification";
import { useProfile } from "../../contexts/profile";
import { globalStyle } from "../../styles/global";
import { ButtonActionCard } from "./components/ButtonActionCard";
import { ContainerCard, DescriptionCard, FooterCard, HeaderCard, ImageCard, PriceCard, SubContainerCard, TitleCard, ValueCard, ValueSymbolCard } from "./styles";

export function ShopCard() {
    const { user } = useProfile()
    const { showNotification } = useNotification()
    return (
        <ContainerCard
            style={globalStyle.shadow}
        >
            <ImageCard
                source={{ uri: user?.avatar }}
            />
            <SubContainerCard>
                <HeaderCard>
                    <TitleCard>
                        teste
                    </TitleCard>
                    <DescriptionCard>
                        20 unidades
                    </DescriptionCard>
                </HeaderCard>
                <FooterCard>
                    <PriceCard>
                        <ValueSymbolCard>
                            Lc
                        </ValueSymbolCard>
                        <ValueCard>
                            4000.00
                        </ValueCard>
                    </PriceCard>
                    <ButtonActionCard
                        onPress={() => showNotification('eee', 'eee')}
                        inCart
                    />
                </FooterCard>
            </SubContainerCard>
        </ContainerCard>
    )
}