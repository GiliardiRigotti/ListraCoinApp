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

export function SubscribeScreen() {
    const { signUp } = useProfile()
    const { goBack } = useNavigation<StackRoutes>()
    const { showNotification } = useToastNotification()
    const [nome, setNome] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [senha, setSenha] = useState<string>()

    const subscribe = () => {
        if (!!email && !!senha && !!nome) {
            if (signUp({ email, senha, nome })) {
                goBack()
                return
            }
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
                    Cadastro
                </TitleBox>
                <Input placeholder='Nome' onChangeText={setNome} icon={<Icon iconName={IconNames.USER_ICON} />} />
                <Input placeholder='E-mail' onChangeText={setEmail} icon={<Icon iconName={IconNames.USER_ICON} />} />
                <Input placeholder='Senha' onChangeText={setSenha} icon={<Icon iconName={IconNames.LOCK_ICON} />} secureTextEntry />
                <Button title='Cadastrar' fontSize={18} style={{ paddingTop: 12.5, paddingBottom: 12.5 }} onPress={subscribe} />

            </Box>
        </Container>
    )
}