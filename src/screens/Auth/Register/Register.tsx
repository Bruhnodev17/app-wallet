import { View, Text } from 'react-native'
import React from 'react'
import { Container, ContentHeader, Description, ContentBody, Title } from './styles'
import Input from '../../../components/Input'
import theme from '@src/styles/theme'

export const Register = () => {


    return (
        <Container>
            <ContentHeader>
                <Title>Seja bem vindo (a) {'\n'} App Wallet</Title>
                <Description>Cadastro</Description>
            </ContentHeader>

            <ContentBody>
                <Input leftIcon
                    iconSize={23}
                    iconName="person-outline"
                    iconColor={theme.COLORS.GRAY2}
                    autoCorrect={false}
                    autoCapitalize="none"
                    securetextentry={false}
                    placeholder="Digite seu nome"
                    KeyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    />

                <Input leftIcon
                    iconSize={23}
                    iconName="mail-outline"
                    iconColor={theme.COLORS.GRAY2}
                    autoCorrect={false}
                    autoCapitalize="none"
                    securetextentry={false}
                    placeholder="Digite seu e-mail"
                    KeyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    />

                <Input leftIcon
                    rightIcon
                    iconSize={23}
                    iconName="lock-closed-outline"
                    iconColor={theme.COLORS.GRAY2}
                    autoCorrect={false}
                    autoCapitalize="none"
                    securetextentry
                    placeholder="Digite sua senha"
                    KeyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    />
            </ContentBody>
        </Container>
    )
}

