import styled from "styled-components/native";

import theme from "@src/styles/theme";



export const ContentTop = styled.View`
    width: 100%;
    height: 40%;
    align-items: center;
    padding: 0 10px;
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
    padding-left:5px
`



export const IconNotification = styled.TouchableOpacity`
    width: 50px;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 35;
`

export const DataNotification = styled.View`

`

export const DataNotificationText = styled.Text`
    font-size: 12px;
    color: ${({ }) => theme.COLORS.GRAY4};
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
    color: ${({ }) => theme.COLORS.PURPLE};
    margin-top: 10px;
`


export const BadgeIcon = styled.View`
    background-color: ${({}) => theme.COLORS.RED};
    width: 15px;
    height: 15px;
    border-radius: 10px;
    position: absolute;
    right: 0;
    top: 0px;
`






