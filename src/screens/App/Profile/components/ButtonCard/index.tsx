import Icon from "../../../../../components/Icon";
import { globalStyle } from "../../../../../styles/global";
import { Container, Title } from "./styles";

interface Props {
    title: string
    iconName: string
    onPress: () => void
}

export function ButtonCard({ title, iconName, onPress }: Props) {
    return (
        <Container
            onPress={onPress}
            style={globalStyle.shadow}
        >
            <Icon
                iconName={iconName}
            />
            <Title>
                {title}
            </Title>
        </Container>
    )
}