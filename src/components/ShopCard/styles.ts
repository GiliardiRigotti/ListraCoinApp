import styled from "styled-components/native";
import { colors } from "../../constants/colors";

export const ContainerCard = styled.View`
    width: 40%;
    min-height: 100px;
    max-height: 233px;
    border-radius: 16px;
    background-color: ${colors.white};
`

export const ImageCard = styled.Image`
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    width: 100%;
    height: 100;
`

export const SubContainerCard = styled.View`
    padding: 16px 8px;
    gap:16px;
`

export const HeaderCard = styled.View`
`
export const TitleCard = styled.Text`
    font-family: Sora-SemiBold;
    font-size: 16px;
    color: ${colors.greyBlack};
`

export const DescriptionCard = styled.Text`
    font-family: Sora-Regular;
    font-size: 10px;
    color: ${colors.grey};
`

export const FooterCard = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`

export const PriceCard = styled.View``

export const ValueSymbolCard = styled.Text`
    font-family: Sora-Regular;
    color: ${colors.purple};
    font-size: 12px;
`

export const ValueCard = styled.Text`
    font-family: Sora-SemiBold;
    color: ${colors.purple};
    font-size: 16px;
`