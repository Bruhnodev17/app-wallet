import { View, Text } from 'react-native'
import React from 'react'
import { Container, ContentTop, ContentTopTitle, ContentBody, ContentBodyTitle,  } from './styles'

import { Header } from "../../../components/Header"


export const Notification = () => {
  return (
    <>
        <Header
         iconLeft
         typeNotification
         appName='Notificações'/>
        <Container>

            <ContentTop>
                <ContentTopTitle>Novo</ContentTopTitle>
            </ContentTop>

            <ContentBody>
                <ContentBodyTitle>Recentes</ContentBodyTitle>
            </ContentBody>

        </Container>
    </>
  )
}

