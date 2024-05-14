import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { Container, TextInput, styles } from "./styles";
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
    icon: React.ReactNode
}

export function Input({ icon, ...TextInputProps }: Props) {
    return (
        <Container
            style={styles.shadow}
        >
            {icon && icon}
            <TextInput
                {...TextInputProps}
            />
        </Container>
    )
}