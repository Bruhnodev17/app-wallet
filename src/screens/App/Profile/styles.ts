import theme from "@src/styles/theme"
import styled from "styled-components/native"



export const Container = styled.View`


`

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;


`
export const Content = styled.View`



`
export const Footer = styled.View`

`

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 350px;

`
export const ViewHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`
export const HeaderName = styled.Text`
    font-size: 22px;
    color: ${({}) => theme.COLORS.GRAY2};
    font-family: ${({}) => theme.FONTS.POPPINSLIGHT};
    margin-right: 15px;
`

export const IconButton = styled.TouchableOpacity`


`
