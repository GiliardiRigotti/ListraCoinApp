import styled from "styled-components/native";
import { colors } from "../../../../../constants/colors";

export const ContainerAvatar = styled.View`
    align-self: center;
    align-items: center;
`

export const ContainerImage = styled.View`
    align-self: center;
    align-items: center;
`

export const ImagemAvatar = styled.Image`
    width: 96px;
    height: 96px;
    border-radius: 24px;
`

export const ButtonCamera = styled.TouchableOpacity`
    position: absolute;
    bottom: -25px;
    align-items: center;
    justify-content: center;
`

export const NameAvatar = styled.Text`
    font-family: Sora-SemiBold;
    font-size: 16px;
    color: ${colors.whiteSnow};
    padding-top: 20px;
`