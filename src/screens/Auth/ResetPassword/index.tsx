import { Box, Container, FooterContainer, LinkButton, LinkText, Separator, TitleBox } from "./styles";
import Logo from '../../../assets/imgs/logo.svg'
import Icon from "../../../components/Icon";
import { IconNames } from "../../../assets/icons";
import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { useProfile } from "../../../contexts/profile";
import { useState } from "react";
import { useToastNotification } from "../../../contexts/toastSheet";
import { useNavigation } from "@react-navigation/native";
import { StackRoutes } from "../../../interfaces/route";

export function ResetPassword() {
    const { } = useProfile()
    const { goBack } = useNavigation<StackRoutes>()
    const { showNotification } = useToastNotification()
    const [nome, setNome] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [senha, setSenha] = useState<string>()

    const resetPassword = () => {
        if (!!email && !!senha) {

            showNotification('Erro ao cadastrar', 'Tente mais tarde')
            return
        }
        showNotification('Aviso', 'Favor preencher os campos')
    }
    return (
        <Container>
            <Logo style={{
                alignSelf: 'center'
            }} />
            <Box>
                <TitleBox>
                    Resetar a senha
                </TitleBox>
                <Input placeholder='E-mail' onChangeText={setEmail} icon={<Icon iconName={IconNames.USER_ICON} />} />
                {
                    email && (
                        <Input placeholder='Senha' onChangeText={setSenha} icon={<Icon iconName={IconNames.LOCK_ICON} />} secureTextEntry />
                    )
                }
                <Button title='Resetar a senha' fontSize={18} style={{ paddingTop: 12.5, paddingBottom: 12.5 }} onPress={resetPassword} />

            </Box>
        </Container>
    )
}