import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../constants/colors";

export const Container = styled.View`
    height: 80px;
    width: 80%;
    flex-direction: row;
    border-radius: 24px;
    align-items: center;
    justify-content:flex-start;
    background-color: ${colors.white};
    padding:24px;
    gap:16px;
`

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: '#000',
})`
    font-family: Sora-SemiBold;
    font-size: 18px;
`

