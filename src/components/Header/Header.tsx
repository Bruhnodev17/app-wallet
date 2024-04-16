import { View, Text } from 'react-native'
import React from 'react'
import {
    Container,
    ContentHeader,
    Avatar,
    AppName,
    Status,
    IconButton
} from './styles'
import { BellSimpleRinging, ChartBarHorizontal, GearSix } from 'phosphor-react-native';

interface IHeader {
    iconLeft?: boolean;
    typeReport?: boolean
    typeNotification?: boolean;
    typeConfig?: boolean;
    appName: string;
    isActiveText?: boolean;
    AvatarRight?: boolean;
}

export const Header = ({
    appName, isActiveText, AvatarRight, iconLeft, typeReport, typeNotification, typeConfig
}: IHeader) => {
    return (
        <Container>
            {iconLeft && (
                <>
                    {typeReport && (
                            <ChartBarHorizontal size={32} weight='bold' style={{marginTop:7}} />
                    )}
                    {typeNotification && (

                        <BellSimpleRinging size={32} weight='bold' style={{marginTop:6}} />

                    )}
                    {typeConfig && (

                        <GearSix size={32} weight='bold' style={{marginTop:6}} />

                    )}
                </>
            )}

            <ContentHeader>
                <AppName>{appName}</AppName>
                {isActiveText && (
                    <Status>Ativo 🟢</Status>
                )}
            </ContentHeader>
            {AvatarRight && (
                <Avatar
                    source={{ uri: "https://github.com/Bruhnodev17.png" }}
                />
            )}

        </Container>
    )
}

