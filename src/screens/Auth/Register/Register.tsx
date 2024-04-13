import React from 'react'
import { useNavigation } from "@react-navigation/native"
import { Container, ContentHeader, Description, ContentBody, Title,
    ButtonFooter, Title1, Title2, ContentFooter
} from './styles'
import Input from '../../../components/Input'
import theme from '@src/styles/theme'
import { Button } from '@src/components/CustomButton'
import { KeyboardAvoidingView } from 'react-native'


export const Register = () => {
    const navigation = useNavigation()

    const handleBackToLogin = () =>{
        navigation.navigate('Login')
    }


    return (
        <KeyboardAvoidingView
        behavior='position'
        enabled
        >
        <Container>
            <ContentHeader>
                <Title>Seja bem vindo (a) {'\n'} a App Wallet</Title>
                <Description>CADASTRO</Description>
            </ContentHeader>

            <ContentBody>
                <Input leftIcon
                    iconSize={23}
                    iconName="person-outline"
                    iconColor={theme.COLORS.GRAY2}
                    autoCapitalize="none"
                    securetextentry={false}
                    placeholder="Digite seu nome"
                    KeyboardType="default"
                    autoCorrect={false}
                    />

                <Input leftIcon
                    iconSize={23}
                    iconName="mail-outline"
                    iconColor={theme.COLORS.GRAY2}
                    securetextentry={false}
                    autoCapitalize="none"
                    placeholder="Digite seu e-mail"
                    KeyboardType="email-address"
                    autoCorrect={false}
                    />

                <Input leftIcon
                    rightIcon
                    iconSize={23}
                    iconName="lock-closed-outline"
                    iconColor={theme.COLORS.GRAY2}
                    autoCorrect={false}
                    securetextentry
                    placeholder="Digite sua senha"
                    KeyboardType="default"
                    autoCapitalize="none"
                    />

                    <Button
                    title='Cadastrar'
                    onPress={() => { } }
                    iconName={'login'}
                    style={{
                        marginTop: 50,
                    }}                 />
            </ContentBody>

            <ContentFooter>
                <ButtonFooter onPress={handleBackToLogin}>
                    <Title1>Já tem uma conta?</Title1>
                    <Title2>Logar-se</Title2>
                </ButtonFooter>
            </ContentFooter>
        </Container>
        </KeyboardAvoidingView>
    )
}

