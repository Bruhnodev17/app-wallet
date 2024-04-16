import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './styles'

import { Header } from "../../../components/Header"


export const Report = () => {
  return (
    <>
    <Header
        iconLeft
        typeReport
        appName='Relatório'/>
    <Container>
      <Text>Report</Text>
    </Container>
    </>
  )
}

