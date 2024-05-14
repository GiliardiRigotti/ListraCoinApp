import styled from "styled-components/native";
import { colors } from "../../constants/colors";

export const ContainerHeader = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
`

export const Wrapper = styled.View`
    gap:16px;
    justify-content: space-between;
`

export const ContainerHello = styled.View`
    flex-direction: row;
`

export const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 16px;
`

export const Name = styled.Text`
    font-family: Sora-SemiBold;
    color: ${colors.white};
    font-size: 16px;
`

export const Hello = styled.Text`
    font-family: Sora-Regular;
    color: ${colors.white};
    font-size: 16px;
`

export const LogoTitle = styled.Text`
    font-family: Sora-SemiBold;
    color: ${colors.white};
    font-size: 14px;
`

export const LogoContainer = styled.View`
    background-color: ${colors.black};
    padding: 3px 8px;
    border-radius: 24px;
`