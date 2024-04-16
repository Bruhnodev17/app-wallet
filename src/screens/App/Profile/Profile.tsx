import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { Container, Header, Content, Footer, Avatar, ViewHeader, HeaderName, IconButton,
    ViewFooter,ViewIconButton, TitleFooter } from "./styles"
import { GoBack } from '@src/components/GoBack'
import { Pen, Trash } from 'phosphor-react-native'
import theme from '@src/styles/theme'

import { Profile as ComponentProfile } from '@src/components/Profile'

export const Profile = () => {
    return (
        <>
            <GoBack />
            <Container>
                <Header>
                    <Avatar
                        source={{ uri: "http://github.com/Bruhnodev17.png" }}
                    />
                    <ViewHeader>
                        <HeaderName>Manoel Bruno</HeaderName>
                        <IconButton>
                            <Pen size={30} weight='duotone' color={theme.COLORS.PURPLEDARK1} />
                        </IconButton>

                    </ViewHeader>
                </Header>
                <Content>

                    <ComponentProfile
                        name='Conta Conectada'
                        onPress={() => { }}
                    />
                    <ComponentProfile
                        name='Privacidade e Segurança'
                        onPress={() => { }}
                    />
                    <ComponentProfile
                        name='Configuração de Login'
                        onPress={() => { }}
                    />
                    <ComponentProfile
                        name='Centro de Serviço'
                        onPress={() => { }}
                    />

                </Content>
                <Footer>
                    <ViewFooter>
                        <TouchableOpacity>
                            <ViewIconButton>
                                <Trash
                                    size={32}
                                    weight='regular'
                                    color={theme.COLORS.PURPLE1} />
                            </ViewIconButton>
                        </TouchableOpacity>
                        <TitleFooter>Deletar Conta</TitleFooter>
                    </ViewFooter>

                </Footer>
            </Container>
        </>
    )
}

