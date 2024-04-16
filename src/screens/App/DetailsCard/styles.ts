import styled from "styled-components/native";
import theme from "@src/styles/theme";

export const Container = styled.View`
        padding: 30px;
`
export const Title = styled.Text`
    width: 100%;
    font-size: 30px;
    color: ${({}) => theme.COLORS.PURPLEDARK3};
    text-align: center;
    margin-top: 50px;
    font-family: ${({}) => theme.FONTS.POPPINSMEDIUM};
`

export const CardImage = styled.Image`
    width: 100%;
    height: 220px;
    border-radius: 50px;
    margin-top: 30px;
`
