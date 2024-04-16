import React from 'react'
import { Container } from './styles'
import theme from '@src/styles/theme'

import { Header } from "../../../components/Header"
import {Profile} from "../../../components/Profile/"
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
                <Profile
                iconLeft
                typeUser
                name='Perfil'/>

                <Profile
                iconLeft
                typeNotification
                name='Notificações'/>

                <Profile
                iconLeft
                typeWallet
                name='Minha Carteira'/>

                <Profile
                iconLeft
                typeLogin
                name='Configuração Login'/>

                <Profile
                iconLeft
                typeCall
                name='Central de Serviço'/>
            </Container>
        </>
    )
}

