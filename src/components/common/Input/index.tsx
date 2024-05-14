import { globalStyle } from "../../../styles/global";
import { Container, TextInput } from "./styles";
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
    icon: React.ReactNode
}

export function Input({ icon, ...TextInputProps }: Props) {
    return (
        <Container
            style={globalStyle.shadow}
        >
            {icon && icon}
            <TextInput
                {...TextInputProps}
            />
        </Container>
    )
}