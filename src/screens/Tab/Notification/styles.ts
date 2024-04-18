import styled from "styled-components/native";
import theme from "@src/styles/theme";
import { FlatList } from "react-native";

export const Container = styled.View`
    flex: 1;
`

export const ContentTop = styled.View`
    width: 100%;
    height: 40%;
    align-items: center;
    padding: 30px 10px;
`

export const ContentTopTitle = styled.Text`
    font-size: 24px;
    font-family:${({}) => theme.FONTS.POPPINSBOLD};
    color: ${({}) => theme.COLORS.PURPLE};
`

export const ContentBody = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    padding: 30px 10px;
`

export const ContentBodyTitle = styled.Text`
    font-size: 24px;
    font-family:${({}) => theme.FONTS.POPPINSBOLD};
    color: ${({}) => theme.COLORS.PURPLE};
`

export const NewFlatList = styled(FlatList)`


`

export const RecentFlatList = styled(FlatList)`


`

