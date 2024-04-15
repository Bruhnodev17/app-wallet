import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Container, ViewProfile, ProfileName, ViewRight, ViewIcon } from './styles'
import theme from '@src/styles/theme'

import { Header } from "../../../components/Header"
import { CaretRight, User } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

export const Settings = () => {
    const navigation = useNavigation()

    const handleGoProfile = () => {
       // navigation.navigate("")
       console.warn("Clicou aqui")
    }

    return (
        <>
            <Header appName='Configurações' />
            <Container>

                <ViewProfile>
                    <ViewIcon>
                        <User
                            size={27}
                            weight='bold'
                            color={theme.COLORS.PURPLEDARK2}
                        />
                    </ViewIcon>

                    <ViewRight>
                        <ProfileName>Manoel Bruno</ProfileName>
                        <TouchableOpacity onPress={handleGoProfile}>
                            <CaretRight
                                size={25}
                                weight='bold'
                                color={theme.COLORS.GRAY3} />
                        </TouchableOpacity>
                    </ViewRight>

                </ViewProfile>

            </Container>
        </>
    )
}

