import { View, Text } from 'react-native'
import React from 'react'
import { Container, } from './styles'

import { Header } from "../../../components/Header"


export const Notification = () => {
  return (
    <>
        <Header
         iconLeft
         typeNotification
         appName='Notificações'/>
        <Container>
        </Container>
    </>
  )
}

