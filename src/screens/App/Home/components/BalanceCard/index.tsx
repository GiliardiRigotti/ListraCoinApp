import { IconNames } from "../../../../../assets/icons"
import { useProfile } from "../../../../../contexts/profile"
import { globalStyle } from "../../../../../styles/global"
import Icon from "../../../../../components/Icon"
import { BalanceSymbol, BalanceValue, ContainerBalance, Separator, Wrapper } from "./styles"

export function BalanceCard() {
    const { user } = useProfile()
    return (
        <ContainerBalance
            style={globalStyle.shadow}
        >
            <Wrapper>
                <Icon iconName={IconNames.WALLET_ICON} />
                <BalanceSymbol>Lc</BalanceSymbol>
                <BalanceValue>{user.saldo ? user?.saldo.toFixed(2) : 0}</BalanceValue>
            </Wrapper>
            <Separator />
            <Wrapper>
                <Icon iconName={IconNames.SHOPPING_BAG_ICON} />
                <BalanceValue>Shop</BalanceValue>
            </Wrapper>
        </ContainerBalance>
    )
}