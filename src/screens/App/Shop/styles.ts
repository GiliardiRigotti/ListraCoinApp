import styled from "styled-components/native";
import { colors } from "../../../constants/colors";

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
    height: 85%;
    width: 100%;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    padding-top: 40px;
    padding-bottom: 16px;
`

export const TitleBox = styled.Text`
    font-family: Sora-SemiBold;
    color:${colors.black};
    font-size: 24px;
    align-self: flex-start;
    padding-left: 24px;;
`

export const LinkButton = styled.TouchableOpacity`
`

export const LinkText = styled.Text`
    color: ${colors.white};
`