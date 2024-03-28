import React from "react";
import { SafeAreaView, Text } from "react-native";
import ButtonSocialGoogle from "@src/components/ButtonSocialGoogle/ButtonSocialGoogle";
import ButtonSocial from "@src/components/ButtonSocial/ButtonSocial";

import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title, Description, ViewButton
} from "./styles";

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>

                <ContentHeader>
                    <Title>Seja Bem Vindo(a){"\n"}Wallet App!</Title>

                    <Description>Entrar com redes sociais</Description>

                    <ViewButton>
                        <ButtonSocialGoogle title="Google"/>
                        <ButtonSocial iconName="facebook" title="Facebook"/>
                    </ViewButton>
                </ContentHeader>

                <ContentBody>

                </ContentBody>

                <ContentFooter></ContentFooter>
            </Container>
        </SafeAreaView>
    );
};

export default Login;
