import { View, Text } from 'react-native'
import React from 'react'
import {Container, Title} from "./styles"

import { Header } from '@src/components/Header'

export const Transaction = () => {
  return (
    <>
    <Header appName='Transações'
    iconLeft
    typeCash
    />
    <Container>
      <Title>Transações</Title>
    </Container>
    </>

  )
}

