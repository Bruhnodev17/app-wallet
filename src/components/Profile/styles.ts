import theme from "@src/styles/theme";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 10px 15px;
`

export const ViewProfile = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 5px 15px;
    margin-top: 15px;
`

export const ViewRight = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
    margin-left: 15px;
    justify-content: space-between;
`


export const ProfileName = styled.Text`

    justify-content: space-between;
    font-size: 18px;
    color: ${({ }) => theme.COLORS.BLACK};
    font-family: ${({ }) => theme.FONTS.POPPINSMEDIUM};
`

export const ViewIcon = styled.View.attrs({
    shadowColor: "#000000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3
})`
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: ${({ }) => theme.COLORS.GRAY5};
    border-radius: 50px;



`

