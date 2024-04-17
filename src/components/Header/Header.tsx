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
import { BellSimpleRinging, ChartBarHorizontal, CurrencyCircleDollar, GearSix, Wallet,  } from 'phosphor-react-native';

interface IHeader {
    iconLeft?: boolean;
    typeReport?: boolean
    typeNotification?: boolean;
    typeConfig?: boolean;
    typeCash?: boolean;
    typeWallet?: boolean;
    appName: string;
    isActiveText?: boolean;
    AvatarRight?: boolean;
}

export const Header = ({
    appName, isActiveText, AvatarRight, iconLeft, typeReport, typeNotification, typeConfig, typeCash,typeWallet
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
                    {typeCash && (

                        <CurrencyCircleDollar size={32} weight='bold' style={{marginTop:6}} />

                    )}
                    {typeWallet && (

                        <Wallet size={30} weight='bold' style={{marginTop:15}} />

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

