import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize"
import theme from "@src/styles/theme";
import { Pressable, Text } from "react-native";

export const Container = styled.View`
    padding: ${RFValue(20)}px;

`
export const ContentHeader = styled.View`

    align-items: center;
    justify-content: center;
`


export const ContentBody = styled.View``


export const ViewButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    text-align: center;
    margin-top: ${RFValue(40)}px;
`

export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(18)}px;
    margin-bottom: ${RFValue(10)}px;
    font-family: ${({}) => theme.FONTS.POPPINSMEDIUM};
`

export const ContentFooter = styled.View`
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: -50px;

`


export const ButtonSignUp = styled.Pressable`
     align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const TitleButtonSignUp1 = styled.Text`
    font-size: 17px;
    color: ${({}) => theme.COLORS.GRAY4};
    font-family: ${({}) => theme.FONTS.POPPINSMEDIUM};

`

export const  TitleButtonSignUp2 = styled.Text`
    font-size: 17px;
    color: ${({}) => theme.COLORS.BLUE};
    font-family: ${({}) => theme.FONTS.POPPINSBOLD};
    margin-left: 10px;
`

