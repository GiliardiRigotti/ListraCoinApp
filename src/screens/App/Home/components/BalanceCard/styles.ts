import styled from "styled-components/native";
import { colors } from "../../../../../constants/colors";

export const ContainerBalance = styled.View`
    position: absolute;
    flex-direction: row;
    justify-content: space-around;
    top: -20px;
    width: 80%;
    background-color: ${colors.white};
    align-self: center;
    border-radius: 16px;
`

export const BalanceValue = styled.Text`
    font-family: Sora-SemiBold;
    font-size: 18px;
`

export const BalanceSymbol = styled.Text`
    font-family: Sora-Regular;
    font-size: 16px;
`

export const Separator = styled.View`
    height: 100%;
    width: 1px;
    background-color: rgba(49, 49, 49, 0.1);
`

export const Wrapper = styled.View`
    padding: 16px 20.5px;
    flex-direction: row;
    gap: 8px;
    align-items: flex-end;
`