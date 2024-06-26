import styled from "styled-components/native";
import { colors } from "../../../constants/colors";

export const KeyboardContainer = styled.ScrollView.attrs({
    automaticallyAdjustKeyboardInsets: true,
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        backgroundColor: colors.whiteSnow
    }
})`
    width:100%;
    background-color:${colors.whiteSnow};
    padding:32px 24px;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
`

export const Container = styled.View`
    flex:1;
    background-color: ${colors.purple};
    justify-content: flex-end;
    gap:48px;
`

export const Box = styled.View`
    background-color: ${colors.whiteSnow};
    align-items: center;
    justify-content: center;
    gap: 24px;
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
    padding-top: 40px;
    padding-bottom: 88px;
`

export const Separator = styled.View`
    width: 1px;
    height: 100%;
    background-color: ${colors.grey};
`