import theme from "@src/styles/theme";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const ImageBalance = styled.ImageBackground`
    width: 100%;
    height: 220px;
    position: absolute;
    top: 0;
`

export const AmountValue = styled.Text`
    font-size: 11px;
    font-family: ${({})=> theme.FONTS.POPPINSMEDIUM};
    color:${({}) =>theme.COLORS.WHITE};
    position: absolute;
    top: 62px;
    left: 162px;
`
