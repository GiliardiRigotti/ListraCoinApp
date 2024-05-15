import { useNavigation } from "@react-navigation/native";
import { IconNames } from "../../../assets/icons";
import Icon from "../../../components/Icon";
import { ListShop } from "../../../components/ListShop";
import { useShop } from "../../../contexts/shop";
import { Box, Container, LinkButton, LinkText, TitleBox } from "./styles";

export function ShopScreen() {
    const { listProducts } = useShop()
    const navigation = useNavigation()
    return (
        <Container>
            <LinkButton
                onPress={() => navigation.goBack()}
            >
                <Icon iconName={IconNames.LEFT_ARROW_ICON} />
                <LinkText>
                    Voltar
                </LinkText>
            </LinkButton>
            <Box>
                <TitleBox>
                    Shop
                </TitleBox>
                <ListShop
                    data={listProducts}
                />
            </Box>
        </Container>
    )
}