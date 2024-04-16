import styled from "styled-components/native";
import theme from "@src/styles/theme";

export const Container = styled.View`
        padding: 30px;
`
export const Title = styled.Text`
    width: 100%;
    font-size: 30px;
    color: ${({ }) => theme.COLORS.PURPLEDARK3};
    text-align: center;
    margin-top: 50px;
    font-family: ${({ }) => theme.FONTS.POPPINSMEDIUM};
`

export const CardImage = styled.Image`
    width: 100%;
    height: 220px;
    border-radius: 50px;
    margin-top: 30px;
`

export const ViewDetails = styled.View`
    width: 100%;
    margin-top: 30px;
    align-items: center;
`

export const ViewInfo = styled.View`
    width: 80%;
    padding: 5px 0;
    flex-direction: row;
    align-items: center;
`


export const InfoTitle = styled.Text`
    font-size: 16px;
    flex: 1;
    color: ${({ }) => theme.COLORS.GRAY4};
    line-height: 20px;
`

export const Name = styled.Text`
    font-size: 16px;
    flex: 1;
    color: ${({ }) => theme.COLORS.PURPLEDARK1};
    line-height: 20px;
    font-family: ${({ }) => theme.FONTS.POPPINSMEDIUM};
    text-align: right;
`
export const Bank = styled.Text`
    font-size: 16px;
    flex: 1;
    color: ${({ }) => theme.COLORS.PURPLEDARK1};
    line-height: 20px;
    font-family: ${({ }) => theme.FONTS.POPPINSMEDIUM};
    text-align: right;
`
export const Acount = styled.Text`
    font-size: 16px;
    flex: 1;
    color: ${({ }) => theme.COLORS.PURPLEDARK1};
    line-height: 20px;
    font-family: ${({ }) => theme.FONTS.POPPINSMEDIUM};
    text-align: right;
`
export const Status = styled.Text`
    font-size: 16px;
    flex: 1;
    color: ${({ }) => theme.COLORS.PURPLEDARK1};
    line-height: 20px;
    font-family: ${({ }) => theme.FONTS.POPPINSMEDIUM};
    text-align: right;
`
export const Validity = styled.Text`
     font-size: 16px;
    flex: 1;
    color: ${({ }) => theme.COLORS.PURPLEDARK1};
    line-height: 20px;
    font-family: ${({ }) => theme.FONTS.POPPINSMEDIUM};
    text-align: right;
`

