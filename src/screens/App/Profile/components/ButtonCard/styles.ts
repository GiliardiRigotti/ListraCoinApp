import styled from "styled-components/native"
import { colors } from "../../../../../constants/colors"

export const Container = styled.TouchableOpacity`
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

export const Title = styled.Text`
    font-family: Sora-SemiBold;
    font-size: 18px;
`