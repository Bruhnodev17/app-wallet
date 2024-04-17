import styled from "styled-components/native";
import theme from "@src/styles/theme";
import { Pressable } from "react-native";

export const Container = styled.View`
    flex: 1;
`

export const FooterList = styled.View`
    width: 100%;
`

export const ContentFlat = styled.View`
    padding:  5px;
    margin-right: 10px;
    flex-direction: row;
    justify-content: space-between;
`

export const ContentFlatHeader = styled.View`
    flex-direction: row;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
`



export const ButtonShowAll = styled.TouchableOpacity`
    border-width: 2px;
    border-radius: 30px;
    border-color: ${({}) => theme.COLORS.PURPLEDARK1};
    padding: 4px;
`

export const ButtonTitleShowAll = styled.Text`
    font-size: 12px;
    color: ${({}) => theme.COLORS.PURPLEDARK1};
    font-family: ${({}) => theme.FONTS.POPPINSLIGHT};
`


export const IconTransaction = styled.Image`
    width: 60px;
    height: 60px;

`

export const DetailsTransaction = styled.View`
    flex: 1;
`

export const NameTransaction = styled.Text`
    font-size: 16px;
    color: ${({}) => theme.COLORS.BLACK};
    font-family: ${({}) => theme.FONTS.POPPINSBOLD};
`

export const SubTitleTransaction = styled.Text`
    font-size:14px ;
    color: ${({}) => theme.COLORS.GRAY3};
    font-family: ${({}) => theme.FONTS.POPPINSREGULAR};

`

export const AmountTransaction = styled.Text`
    font-size: 15px;
    color: ${({}) => theme.COLORS.GRAY3};
    font-family: ${({}) => theme.FONTS.POPPINSREGULAR};
    `

export const ButtonGoBack = styled(Pressable)`
    position: absolute;
    background-color: ${({}) => theme.COLORS.GRAY5};
    bottom: 70px;
    border-radius: 30px;
    padding: 10px;
    right: 20px;

`
