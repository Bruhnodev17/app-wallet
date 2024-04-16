import { View, Text } from 'react-native'
import React from 'react'

import { CardImage, Container, Title } from './styles'

import { GoBack } from '@src/components/GoBack'

export const DetailsCard = () => {
  return (
    <>
    <GoBack/>
    <Container>
      <Title>Detalhes do cartão</Title>

      <CardImage
        source={require('../../../assets/carddetails.png')}
      />
    </Container>
    </>
  )
}

