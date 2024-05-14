import { Box, Container, FooterContainer, KeyboardContainer, LinkButton, LinkText, Separator, TitleBox } from "./styles";
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

export function LoginScreen() {
    const { signIn } = useProfile()
    const { navigate } = useNavigation<StackRoutes>()
    const { showNotification } = useToastNotification()
    const [email, setEmail] = useState<string>()
    const [senha, setSenha] = useState<string>()
    /* useEffect(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 10000,
          useNativeDriver: true,
        }).start();
      }, [fadeAnim]); */
    const login = () => {
        if (!!email && !!senha) {
            signIn({ email, senha })
            return
        }
        showNotification('Aviso', 'Favor preencher os campos de E-mail e/ou Senha')
    }
    return (
        <Container>
            <Logo style={{
                alignSelf: 'center'
            }} />
            <Box>
                <KeyboardContainer>
                    <TitleBox>
                        Login
                    </TitleBox>

                    <Input placeholder='E-mail' onChangeText={setEmail} icon={<Icon iconName={IconNames.USER_ICON} />} />
                    <Input placeholder='Senha' onChangeText={setSenha} icon={<Icon iconName={IconNames.LOCK_ICON} />} secureTextEntry />
                    <Button title='Entrar' fontSize={18} style={{ paddingTop: 12.5, paddingBottom: 12.5 }} onPress={login} />
                </KeyboardContainer>
                <FooterContainer>
                    <LinkButton
                        onPress={() => navigate('Subscribe')}
                    >
                        <LinkText>
                            Registra-se
                        </LinkText>
                    </LinkButton>
                    <LinkText>
                        |
                    </LinkText>
                    <LinkButton
                        onPress={() => navigate('ResetPassword')}
                    >
                        <LinkText>
                            Resetar senha
                        </LinkText>
                    </LinkButton>
                </FooterContainer>
            </Box>
        </Container>
    )
}