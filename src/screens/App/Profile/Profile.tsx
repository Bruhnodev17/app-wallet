import { View, Text } from 'react-native'
import React from 'react'

import { Container, Header, Content, Footer, Avatar, ViewHeader, HeaderName, IconButton } from "./styles"
import { GoBack } from '@src/components/GoBack'
import { Pen } from 'phosphor-react-native'
import theme from '@src/styles/theme'

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
                <Content></Content>
                <Footer></Footer>
            </Container>
        </>
    )
}

