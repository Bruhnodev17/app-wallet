import styled from "styled-components/native";
import theme from "@src/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(30)}px;
    background-color: ${theme.COLORS.PRIMARY};
    border-radius: ${RFValue(15)}px;
`;

export const Title = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${RFValue(18)}px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const Content = styled.View `
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

