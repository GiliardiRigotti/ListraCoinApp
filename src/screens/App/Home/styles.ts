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
    height: 75%;
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
    
`