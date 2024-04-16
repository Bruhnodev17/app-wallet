import { View, Text } from 'react-native'
import React from 'react'
import { Container, ImageBalance , AmountValue} from './styles'

import { Header } from "../../../components/Header"


export const Report = () => {
  return (
    <>
    <Header
        iconLeft
        typeReport
        appName='Relatório'/>
    <Container>

      <ImageBalance resizeMode='contain'
      source={require('../../../assets/estatistica.png')}
      />
      <AmountValue>R$ 500.00</AmountValue>

    </Container>
    </>
  )
}

