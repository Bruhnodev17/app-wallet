import { Text } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native"
import theme from '@src/styles/theme';
import Input from "../../../components/Input"
import { Button } from '@src/components/CustomButton';
import {
    Container, ContentHeader, Title, Description, ContentBody,
    ContentFooter, ButtonGoBackHome, Title1, Title2
} from './styles'

export const RecoveryPassword = () => {

    const navigation = useNavigation()

    const handleBackLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <KeyboardAvoidingView
            behavior='position'
            enabled
        >
            <Container>
                <ContentHeader>
                    <Title> Seja Bem Vindo (a) {'\n'} a App Wallet! 🪙 </Title>
                    <Description>Recuperar Senha</Description>
                </ContentHeader>

                <ContentBody>

                    <Input
                        leftIcon
                        iconSize={25}
                        iconName={'mail-outline'}
                        iconColor={theme.COLORS.GRAY3}
                        placeholder="Digite seu e-mail"
                        securetextentry={false}
                    >
                    </Input>

                    <Button title='Recuperar'
                        onPress={() => { }}
                        style={{ marginTop: 80 }} iconName={'API'} />

                </ContentBody>

                <ContentFooter>
                    <ButtonGoBackHome onPress={handleBackLogin}>
                        <Title1>Não quer recuperar senha?</Title1>
                        <Title2>Voltar ao Login</Title2>
                    </ButtonGoBackHome>
                </ContentFooter>
            </Container>
        </KeyboardAvoidingView>
    )
}

