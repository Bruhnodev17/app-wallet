import styled from "styled-components/native";
import theme from "@src/styles/theme";

export const Container  = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`

export const Title = styled.Text`
    width: 100%;
    font-size: 30px;
    color: ${({}) => theme.COLORS.PURPLEDARK3};
    text-align: center;
    margin-top: 50px;
    font-family: ${({}) => theme.FONTS.POPPINSMEDIUM};
`


export const Content = styled.ImageBackground`

    background-color: ${({}) => theme.COLORS.PURPLE};
    width: 240px;
    height: 340px;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    border-radius: 50px;

`

export const SubTitle = styled.Text`

    text-align: center;
    line-height: 20px;
    font-size: 16px;
    margin-top: 70px;
    color: ${({}) => theme.COLORS.PURPLEDARK1};
    font-family: ${({}) => theme.FONTS.POPPINSREGULAR};

`
