import styled from "styled-components/native";
import { colors } from "../../../constants/colors";

export const ContainerButton = styled.TouchableOpacity`
    background-color: ${colors.purple};
    padding: 10px 24px;
    border-radius: 24px;
`

export const TitleButton = styled.Text`
    font-family: Sora-SemiBold;
    color: ${colors.white};
`