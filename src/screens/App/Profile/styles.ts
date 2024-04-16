import theme from "@src/styles/theme"
import styled from "styled-components/native"



export const Container = styled.View`
    padding: 5px;

`

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

`
export const Content = styled.View`
    margin-bottom: 70px;
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
    color: ${({}) => theme.COLORS.PURPLEDARK1};
    font-family: ${({}) => theme.FONTS.POPPINSMEDIUM};
    margin-right: 15px;

`

export const IconButton = styled.TouchableOpacity`


`

export const ViewFooter = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const ViewIconButton = styled.View`
    padding: 10px;
    border-radius: 50px;
    border-width: 1px;
    border-color: ${({}) => theme.COLORS.GRAY5};
    margin-bottom: 10px;

`

export const TitleFooter = styled.Text`
    font-size: 20px;
    color: ${({}) => theme.COLORS.PURPLE};
    font-family: ${({})=> theme.FONTS.POPPINSREGULAR};
    margin-bottom: 30px;
    text-align: center;
`
