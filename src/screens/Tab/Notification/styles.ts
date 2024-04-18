import styled from "styled-components/native";
import theme from "@src/styles/theme";
import { FlatList } from "react-native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
`

export const ContentTop = styled.View`
    width: 100%;
    height: 50%;
    align-items: center;
    padding: 20px 10px;
`

export const ContentTopTitle = styled.Text`
    font-size: 20px;
    font-family:${({}) => theme.FONTS.POPPINSBOLD};
    color: ${({}) => theme.COLORS.PURPLE};

`

export const ContentBody = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    padding: 20px 10px;
`

export const ContentBodyTitle = styled.Text`
    font-size: 24px;
    font-family:${({}) => theme.FONTS.POPPINSBOLD};
    color: ${({}) => theme.COLORS.PURPLE};
`

export const ContentFlat = styled.View`

    margin-top: 10px;
    border-radius: 17px;
    background-color: white;
    align-items: center;
`
export const NewNotificationFlat = styled.View`
    padding: 10px;
    width: 90%;
    height: 100px;
`

export const NewFlatList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,

})
`
`

export const IconNotification = styled.TouchableOpacity`
    width: 50px;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 5;
`

export const DataNotification = styled.View`

`

export const DataNotificationText = styled.Text`
    font-size: 12px;
    color: ${({}) => theme.COLORS.GRAY4};
    margin-bottom: 5px;
`

export const TitleNotification = styled.View`

`

export const TitleNotificationText = styled.Text`
    font-size: 14px;
    font-weight: 500;
`

export const DescriptionNotification = styled.View`

`

export const DescriptionNotificationText = styled.Text`
    font-size: 14px;
    color: ${({}) => theme.COLORS.PURPLE};
    margin-top: 10px;
`




//


export const RecentFlatList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,

})
`

`



