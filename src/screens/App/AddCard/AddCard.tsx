import { View, Text } from 'react-native'
import React from 'react'
import { Container, Title, Content, SubTitle } from './styles'

import { GoBack } from '@src/components/GoBack'

export const AddCard = () => {
  return (
    <>
    <GoBack/>
    <Container>

      <Title>Adicionar Cartão</Title>

    <Content
    source={require('../../../assets/addcard.png')}
    >

    </Content>

    <SubTitle>
        Adicione um novo cartão {'\n'} na carteira para uma vida mais fácil! 😄
    </SubTitle>

    </Container>
    </>
  )
}

