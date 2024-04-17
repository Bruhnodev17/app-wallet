import theme from "@src/styles/theme";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const ImageBalance = styled.ImageBackground`
    width: 100%;
    height: 220px;
    position: absolute;
    top: 0;
`

export const AmountValue = styled.Text`
    font-size: 11px;
    font-family: ${({})=> theme.FONTS.POPPINSMEDIUM};
    color:${({}) =>theme.COLORS.WHITE};
    position: absolute;
    top: 62px;
    left: 162px;
`


export const ViewContent = styled.View`
    padding: 30px;
    position: absolute;
    top: 220px;
`

export const TitleAmount = styled.Text`
    font-size: 22px;
    text-align: center;
    color: ${({}) => theme.COLORS.GRAY4};
    font-family: ${({})=> theme.FONTS.POPPINSREGULAR};
`

export const TotalAmount = styled.Text`
    text-align: center;
    font-size: 33px;
    font-family: ${({})=> theme.FONTS.POPPINSBOLD};
    color: ${({}) => theme.COLORS.PURPLE};
`


export const FooterList = styled.View`
    position: absolute;
    width: 100%;
    top: 320px;
    margin-top: 20px;
`


export const ContentFlat = styled.View`
    padding: 5px 20px;
    flex-direction: row;
    justify-content: space-between;
`

export const ContentFlatHeader = styled.View`
    flex-direction: row;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-size: 20px;
    color: ${({}) => theme.COLORS.GRAY1};
    font-family: ${({}) => theme.FONTS.POPPINSMEDIUM};
    margin-left: 15px;
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
