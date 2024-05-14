import { IconNames } from "../../../../../../assets/icons";
import { useProfile } from "../../../../../../contexts/profile";
import Icon from "../../../../../../components/Icon";
import { Avatar, ContainerHeader, ContainerHello, Hello, LogoContainer, LogoTitle, Name, Wrapper } from "./styles";

export function Header() {
    const { user } = useProfile()
    return (
        <ContainerHeader>
            <Wrapper>
                <Avatar source={{ uri: user?.avatar }} />
                <ContainerHello>
                    <Hello>Olá, </Hello>
                    <Name>{user?.nome}</Name>
                </ContainerHello>
            </Wrapper>
            <Wrapper
                style={{
                    alignItems: 'flex-end'
                }}
            >
                <LogoContainer>
                    <LogoTitle>
                        Listra Coins
                    </LogoTitle>
                </LogoContainer>
                <Icon iconName={IconNames.NOTIFICATION_ICON} />
            </Wrapper>
        </ContainerHeader>
    )
}