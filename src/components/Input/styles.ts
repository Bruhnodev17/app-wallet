import styled from "styled-components/native";
import theme from "@src/styles/theme";

export const Container = styled.View `

    background-color: ${({}) => theme.COLORS.GRAY5};
    width: 100%;
    height: 50px;
    padding: 0 12px;
    justify-content: center;
    border-radius: 8px;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
`;

export const InputContainer = styled.TextInput `

    flex: 1;
    height: 45px;
    border: 0;
    border-radius: 8px;
    font-family: ${({}) => theme.FONTS.POPPINSLIGHT};
    font-size: 14px;
`
