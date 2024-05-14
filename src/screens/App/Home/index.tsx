import { ListShop } from "../../../components/ListShop";
import { ShopCard } from "../../../components/ShopCard";
import { Button } from "../../../components/common/Button";
import { useShop } from "../../../contexts/shop";
import { BalanceCard } from "./components/BalanceCard";
import { Header } from "./components/BalanceCard/Header";
import { Box, Container } from "./styles";

export function HomeScreen() {
    const { listProducts } = useShop()
    return (
        <Container>
            <Header />

            <Box>
                <BalanceCard />
                <ListShop
                    data={listProducts.length > 0 ? listProducts.slice(0, 2) : []}
                />
                <Button
                    title='Ver todos os produtos'
                />
            </Box>
        </Container>
    )
}