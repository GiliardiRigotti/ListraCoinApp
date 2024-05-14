import { useProfile } from "../../contexts/profile";
import { globalStyle } from "../../styles/global";
import { ContainerCard, DescriptionCard, FooterCard, ImageCard, PriceCard, SubContainerCard, TitleCard, ValueSymbolCard } from "./styles";

export function ShopCard() {
    const { user } = useProfile()
    return (
        <ContainerCard
            style={globalStyle.shadow}
        >
            <ImageCard
                source={{ uri: user?.avatar }}
            />
            <SubContainerCard>
                <TitleCard>
                    teste
                </TitleCard>
                <DescriptionCard>
                    20 unidades
                </DescriptionCard>
                <FooterCard>
                    <PriceCard>
                        <ValueSymbolCard>
                            Lc
                        </ValueSymbolCard>
                    </PriceCard>
                </FooterCard>
            </SubContainerCard>
        </ContainerCard>
    )
}