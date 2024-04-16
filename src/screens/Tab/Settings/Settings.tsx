import React from 'react'
import { Container, ViewFooter, TitleFooter, ViewIconButton } from './styles'
import theme from '@src/styles/theme'
import { TouchableOpacity } from 'react-native'


import { Header } from "../../../components/Header"
import { Profile } from "../../../components/Profile/"
import { useNavigation } from '@react-navigation/native'
import { SignOut } from 'phosphor-react-native'

export const Settings = () => {
    const navigation = useNavigation()

    const handleGoProfile = () => {
        navigation.navigate("Profile")
    }

    return (
        <>
            <Header appName='Configurações' />
            <Container>
                <Profile
                    iconLeft
                    typeUser
                    name='Perfil do Usuário'
                    onPress={handleGoProfile} />

                <Profile
                    iconLeft
                    typeNotification
                    name='Notificações'
                    onPress={() => { }} />

                <Profile
                    iconLeft
                    typeWallet
                    name='Minha Carteira'
                    onPress={() => { }} />

                <Profile
                    iconLeft
                    typeLogin
                    name='Configuração de Login'
                    onPress={() => { }} />

                <Profile
                    iconLeft
                    typeCall
                    name='Central de Serviço'
                    onPress={() => { }} />
            </Container>

            <ViewFooter>
                <TouchableOpacity>
                    <ViewIconButton>
                        <SignOut
                            size={32}
                            weight='light'
                            color={theme.COLORS.PURPLE1} />
                    </ViewIconButton>
                </TouchableOpacity>
                <TitleFooter>Sair da Wallet</TitleFooter>
            </ViewFooter>
        </>
    )
}

