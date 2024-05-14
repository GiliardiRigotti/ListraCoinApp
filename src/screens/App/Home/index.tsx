import { ShopCard } from "../../../components/ShopCard";
import { BalanceCard } from "./components/BalanceCard";
import { Header } from "./components/BalanceCard/Header";
import { Box, Container } from "./styles";

export function HomeScreen() {
    return (
        <Container>
            <Header />

            <Box>
                <BalanceCard />
                <ShopCard />
            </Box>
        </Container>
    )
}