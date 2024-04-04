import React from "react";
import { SafeAreaView, Text } from "react-native";
import ButtonSocialGoogle from "@src/components/ButtonSocialGoogle/ButtonSocialGoogle";
import ButtonSocial from "@src/components/ButtonSocial/ButtonSocial";
import {Button} from "@src/components/Button/Button";
import Input from "@src/components/Input";
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title, Description, ViewButton
} from "./styles";
import theme from "@src/styles/theme";

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>

                <ContentHeader>
                    <Title>Seja Bem Vindo(a){"\n"}Wallet App!</Title>

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
                        placeholder="Digite seu e-mail" />
                    <Input leftIcon
                        iconSize={25}
                        iconName="lock-closed-outline"
                        iconColor={theme.COLORS.TEXTDARK}
                        placeholder="Digite sua senha" />

                        <Button
                        title="Entrar"
                        onPress={()=>{}}/>
                </ContentBody>

                <ContentFooter></ContentFooter>
            </Container>
        </SafeAreaView>
    );
};

export default Login;
