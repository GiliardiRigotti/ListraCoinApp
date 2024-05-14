import { TouchableOpacityProps } from "react-native"
import { ContainerButton, TitleButton } from "./styles"

interface Props extends TouchableOpacityProps {
    title: string
    fontSize?: number
}
export function Button({ title, fontSize = 16, onPress, style }: Props) {
    return (
        <ContainerButton
            onPress={onPress}
            style={style}
        >
            <TitleButton
                style={{
                    fontSize: fontSize
                }}
            >
                {title}
            </TitleButton>
        </ContainerButton>
    )
}