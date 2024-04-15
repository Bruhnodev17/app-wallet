import { View, Text } from 'react-native'
import React from 'react'
import {
    Container,
    ContentHeader,
    Avatar,
    AppName,
    Status,
} from './styles'

interface IHeader {
    appName: string;
    isActiveText?: boolean;
    AvatarRight?: boolean;
}

export const Header = ({
    appName, isActiveText, AvatarRight,
}: IHeader) => {
    return (
        <Container>
            <ContentHeader>
                <AppName>{appName}</AppName>
                {isActiveText && (
                    <Status>Ativo 🟢</Status>
                )}
            </ContentHeader>
            {AvatarRight &&(
                  <Avatar
                  source={{ uri: "https://github.com/Bruhnodev17.png" }}
              />
            )}

        </Container>
    )
}

