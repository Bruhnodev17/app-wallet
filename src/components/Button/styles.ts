import styled from "styled-components/native";
import theme from "@src/styles/theme";
import { Pressable,Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.Pressable`
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(15)}px;
    background-color: ${theme.COLORS.PRIMARY};
    border-radius: ${RFValue(15)}px;
`;

export const Title = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${RFValue(18)}px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

