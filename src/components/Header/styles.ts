import styled from "styled-components/native";
import { Platform } from "react-native";
import theme from "@src/styles/theme";

export const Container = styled.View`
    margin-top: ${Platform.OS === "ios" ? 0 : 25}px;
    width: 100%;
    padding: 30px;
    flex-direction: row;
    justify-content: space-around;
`

export const ContentHeader = styled.View`
    width: 100%;
    padding: 10px;
    justify-content: center;
    margin-top: 20px;
`

export const Avatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-right: 30px;
    margin-top: 33px;
 `

export const AppName = styled.Text`
    font-size: 25px;
    color: ${({ }) => theme.COLORS.GRAY1};
    line-height: 30px;
    font-family: ${({}) => theme.FONTS.POPPINSBOLD};
`
export const Status = styled.Text`
    font-size: 15px;
    line-height: 30px;
    color: ${({ }) => theme.COLORS.GRAY4};
    font-family: ${({}) => theme.FONTS.POPPINSMEDIUM};
    margin-left: 10px;
`
