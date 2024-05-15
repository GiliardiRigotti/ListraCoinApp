import { useNavigation } from "@react-navigation/native";
import { ListBanner } from "../../../components/ListBanner";
import { ListShop } from "../../../components/ListShop";
import { ShopCard } from "../../../components/ShopCard";
import { Button } from "../../../components/common/Button";
import { useShop } from "../../../contexts/shop";
import { BalanceCard } from "./components/BalanceCard";
import { Header } from "./components/Header";
import { Box, Container } from "./styles";
import { TabRoutes } from "../../../interfaces/route";

export function HomeScreen() {
    const { listProducts } = useShop()
    const navigation = useNavigation<TabRoutes>()

    return (
        <Container>
            <Header />
            <Box>
                <BalanceCard />
                <ListBanner />
                <ListShop
                    data={listProducts.length > 0 ? listProducts.slice(0, 2) : []}
                />
                <Button
                    title='Ver todos os produtos'
                    onPress={() => navigation.navigate('ShopScreen')}
                />
            </Box>
        </Container>
    )
}