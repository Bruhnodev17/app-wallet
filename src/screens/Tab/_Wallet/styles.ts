import styled from "styled-components/native";
import theme from "@src/styles/theme";

export const Container = styled.View`
    align-items: center;
    flex:1;
`
export const ViewContent = styled.View`
    padding: 0 20px;
    align-items: center;
    justify-content: center;
`


export const Content = styled.View `
    background-color: ${({})=> theme.COLORS.PURPLEDARK3};
    width: 310px;
    height: 146px;
    border-radius: 50px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`

export const ViewBalanceLeft = styled.View `

    `

export const ViewBalanceRight = styled.View`

`

export const TitleValue = styled.Text `
    font-size: 16px;
    color:${({})=> theme.COLORS.WHITE};
    font-family: ${({}) => theme.FONTS.POPPINSREGULAR};
    margin-bottom: 10px;
    `
export const TitleCard = styled.Text`
    font-size: 16px;
    color:${({})=> theme.COLORS.WHITE};
    font-family: ${({}) => theme.FONTS.POPPINSREGULAR};
    margin-bottom: 10px;
`

export const TitleValueAcount = styled.Text `
    font-size: 20px;
    color:${({})=> theme.COLORS.WHITE};
    font-family: ${({}) => theme.FONTS.POPPINSBOLD};
    `

export const TitleCardBank = styled.Text `
     font-size: 20px;
    color:${({})=> theme.COLORS.WHITE};
    font-family: ${({}) => theme.FONTS.POPPINSBOLD};
`


