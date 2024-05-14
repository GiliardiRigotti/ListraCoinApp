import styled from "styled-components/native";
import { colors } from "../../../constants/colors";
import { Platform } from "react-native";

export const Container = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
    flex:1;
    background-color: ${colors.purple};
    justify-content:flex-end;
    gap:48px;
`

export const Box = styled.View`
    background-color: ${colors.whiteSnow};
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 24px 32px ;
    width: 100%;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
`

export const TitleBox = styled.Text`
    font-family: Sora-SemiBold;
    color:${colors.black};
    font-size: 24px;
`

export const LinkButton = styled.TouchableOpacity`
`

export const LinkText = styled.Text`
    font-family: Sora-Regular;
    font-size: 10px;
    color: ${colors.grey};
`

export const FooterContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

export const Separator = styled.View`
    width: 1px;
    height: 100%;
    background-color: ${colors.grey};
`