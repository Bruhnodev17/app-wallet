import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native"
import ButtonSocialGoogle from "@src/components/ButtonSocialGoogle/ButtonSocialGoogle";
import ButtonSocial from "@src/components/ButtonSocial/ButtonSocial";
import { Button } from "@src/components/CustomButton/CustomButton";
import Input from "@src/components/Input";
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title, Description, ViewButton,
    ButtonSignUp, TitleButtonSignUp1, TitleButtonSignUp2,
    ContentForgotPassword, ContentButtonForgotPassword, ContentTitleForgotPassword,
} from "./styles";
import theme from "@src/styles/theme";

export const Login: React.FC = () => {

    const navigation = useNavigation()

    const handleRegister = () => {
        navigation.navigate('Register')
    }

    const handleRecoveryPassword = () => {
        navigation.navigate('RecoveryPassword')
    }

    return (
        <KeyboardAvoidingView
            behavior="position"
            enabled
        >
            <Container>

                <ContentHeader>
                    <Title>Seja Bem Vindo(a){"\n"} a Wallet App! 🪙</Title>

                    <Description>Entrar com redes sociais</Description>

                    <ViewButton>
                        <ButtonSocialGoogle title="Google" />
                        <ButtonSocial iconName="facebook" title="Facebook" />
                    </ViewButton>
                </ContentHeader>

                <ContentBody>
                    <Input leftIcon
                        iconSize={25}
                        iconName="mail-outline"
                        iconColor={theme.COLORS.TEXTDARK}
                        placeholder="Digite seu e-mail"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address" />
                    <Input
                        leftIcon
                        rightIcon
                        iconSize={25}
                        iconName="lock-closed-outline"
                        iconColor={theme.COLORS.TEXTDARK}
                        placeholder="Digite sua senha"
                        securetextentry
                        keyboardType="default"
                        autoCorrect={false}
                        autoCapitalize="none"
                    />

                    <ContentForgotPassword>

                            <ContentButtonForgotPassword onPress={handleRecoveryPassword}>
                                <ContentTitleForgotPassword>Recuperar Senha</ContentTitleForgotPassword>
                            </ContentButtonForgotPassword>

                    </ContentForgotPassword>

                    <Button
                        title="Entrar"
                        variant="primary"
                        onPress={() => { }}
                        style={{ marginBottom: 10 }} iconName={"login"} />
                </ContentBody>

                <ContentFooter>
                    <ButtonSignUp onPress={handleRegister}>
                        <TitleButtonSignUp1>Não tem cadastro ainda?</TitleButtonSignUp1>
                        <TitleButtonSignUp2>Cadastre-se</TitleButtonSignUp2>
                    </ButtonSignUp>
                </ContentFooter>
            </Container>
        </KeyboardAvoidingView>
    );
};


