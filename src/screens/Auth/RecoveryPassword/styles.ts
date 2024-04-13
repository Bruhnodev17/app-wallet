import theme from "@src/styles/theme";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 40px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.Text`
    text-align: center;
    font-size: 30px;
    margin-top: 40px;
    font-family: ${({ }) => theme.FONTS.POPPINSMEDIUM};

`
export const Description = styled.Text`
    margin-top: 60px;
    font-size: 30px;
    margin-bottom: 10px;
    font-family: ${({ }) => theme.FONTS.POPPINSBOLD};

`

export const ContentBody = styled.View`


`

export const ContentFooter = styled.View`
    align-items: center;
    justify-content: center;
`

export const ButtonGoBackHome = styled.TouchableOpacity`
    margin-top: 80px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Title1 = styled.Text`
    font-size: 14px;
    font-family: ${({ }) => theme.FONTS.POPPINSBOLD};
    color: ${({ }) => theme.COLORS.GRAY3};

`

export const Title2 = styled.Text`
    font-size: 17px;
    margin-left: 10px;
    color: ${({ }) => theme.COLORS.BLUE};
    font-family: ${({ }) => theme.FONTS.POPPINSBOLD};
`


