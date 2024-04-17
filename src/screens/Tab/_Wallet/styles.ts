import styled from "styled-components/native";
import theme from "@src/styles/theme";

export const Container = styled.View`
    align-items: center;
    flex:1;
`
export const ViewContent = styled.View`
    padding: 0 20px;
    align-items: center;
    justify-content: center;
`


export const Content = styled.View `
    background-color: ${({})=> theme.COLORS.PURPLEDARK3};
    width: 340px;
    height: 150px;
    border-radius: 50px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`

export const ViewBalanceLeft = styled.View `

    `

export const ViewBalanceRight = styled.View`

`

export const TitleValue = styled.Text `
    font-size: 16px;
    color:${({})=> theme.COLORS.WHITE};
    font-family: ${({}) => theme.FONTS.POPPINSREGULAR};
    margin-bottom: 10px;
    `
export const TitleCard = styled.Text`
    font-size: 16px;
    color:${({})=> theme.COLORS.WHITE};
    font-family: ${({}) => theme.FONTS.POPPINSREGULAR};
    margin-bottom: 10px;
`

export const TitleValueAcount = styled.Text `
    font-size: 20px;
    color:${({})=> theme.COLORS.WHITE};
    font-family: ${({}) => theme.FONTS.POPPINSBOLD};
    `

export const TitleCardBank = styled.Text `
     font-size: 20px;
    color:${({})=> theme.COLORS.WHITE};
    font-family: ${({}) => theme.FONTS.POPPINSBOLD};
`

export const BodyButtons = styled.View `
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

export const IconPayment = styled.Image`
    width: 70px;
    height: 70px;

`

export const IconTransfer = styled.Image`
     width: 70px;
    height: 70px;
`

export const IconPayOut = styled.Image`
     width: 70px;
    height: 70px;
`

export const  IconTopUp = styled.Image`
     width: 70px;
    height: 70px;
`

export const TitleIcon = styled.Text`
    text-align: center;
    font-size: 11px;
    padding: 10px;
    color: ${({}) => theme.COLORS.PURPLEDARK1};
    font-family: ${({}) => theme.FONTS.POPPINSMEDIUM};

`

export const FooterList = styled.View`
    width: 100%;
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
