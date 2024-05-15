import { useNavigation } from "@react-navigation/native";
import { ListBanner } from "../../../components/ListBanner";
import { ListShop } from "../../../components/ListShop";
import { ShopCard } from "../../../components/ShopCard";
import { Button } from "../../../components/common/Button";
import { useShop } from "../../../contexts/shop";
import { Box, Container } from "./styles";
import { TabRoutes } from "../../../interfaces/route";
import { ButtonCard } from "./components/ButtonCard";
import { IconNames } from "../../../assets/icons";
import { useProfile } from "../../../contexts/profile";
import { Avatar } from "./components/Avatar";

export function ProfileScreen() {
    const { signOut } = useProfile()
    const navigation = useNavigation<TabRoutes>()

    return (
        <Container>
            <Avatar />
            <Box>
                <ButtonCard
                    title='Detalhes do Perfil'
                    iconName={IconNames.PROFILE_DETAIL_ICON}
                    onPress={() => { }}
                />
                <ButtonCard
                    title='Detalhes da Conta'
                    iconName={IconNames.ACCOUNT_DETAIL_ICON}
                    onPress={() => { }}
                />
                <ButtonCard
                    title='Histórico'
                    iconName={IconNames.EDIT_ICON}
                    onPress={() => { }}
                />
                <ButtonCard
                    title='Sair da conta'
                    iconName={IconNames.PROFILE_DETAIL_ICON}
                    onPress={signOut}
                />
            </Box>
        </Container>
    )
}