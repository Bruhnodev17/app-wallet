import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Container, ViewProfile, ProfileName, ViewRight, ViewIcon, } from './styles'
import theme from '@src/styles/theme'


import {
    BellSimple,
    CaretRight,
    Password,
    PhoneCall,
    User,
    Wallet,
} from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

interface IProfile {
    name: string;
    iconLeft?: boolean;
    iconRight?: boolean;
    typeUser?: boolean;
    typeNotification?: boolean;
    typeWallet?: boolean;
    typeLogin?: boolean;
    typeCall?: boolean;
    onPress: () => void;
}

export const Profile = ({
    name, iconLeft, iconRight, typeUser, typeNotification, typeWallet, typeLogin, typeCall, onPress,
}: IProfile) => {
    const navigation = useNavigation()

    return (
        <>
            <Container>

                <ViewProfile>
                    {iconLeft && (
                        <>
                            {typeUser && (
                                <ViewIcon>
                                    <User
                                        size={27}
                                        weight='bold'
                                        color={theme.COLORS.PURPLEDARK2}
                                    />
                                </ViewIcon>
                            )}
                            {typeNotification && (
                                <ViewIcon>
                                    <BellSimple
                                        size={27}
                                        weight='bold'
                                        color={theme.COLORS.PURPLEDARK2}
                                    />
                                </ViewIcon>
                            )}
                            {typeWallet && (
                                <ViewIcon>
                                    <Wallet
                                        size={27}
                                        weight='bold'
                                        color={theme.COLORS.PURPLEDARK2}
                                    />
                                </ViewIcon>
                            )}
                            {typeLogin && (
                                <ViewIcon>
                                    <Password
                                        size={27}
                                        weight='bold'
                                        color={theme.COLORS.PURPLEDARK2}
                                    />
                                </ViewIcon>
                            )}
                            {typeCall && (
                                <ViewIcon>
                                    <PhoneCall
                                        size={27}
                                        weight='bold'
                                        color={theme.COLORS.PURPLEDARK2}
                                    />
                                </ViewIcon>
                            )}


                        </>
                    )}


                    <ViewRight>
                        <ProfileName>{name}</ProfileName>
                        <TouchableOpacity onPress={onPress}>
                            <CaretRight
                                size={25}
                                weight='bold'
                                color={theme.COLORS.PURPLE} />
                        </TouchableOpacity>
                    </ViewRight>

                </ViewProfile>

            </Container>


        </>
    )
}

