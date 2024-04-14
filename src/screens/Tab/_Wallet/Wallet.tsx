import { View, Text } from 'react-native'
import React from 'react'
import { Container, Content, ViewContent,
     ViewBalanceLeft,ViewBalanceRight, TitleValue, TitleCard,
      TitleValueAcount, TitleCardBank } from './styles'

import { Header } from '@src/components/Header/Header'

export const Wallet = () => {
  return (
    <Container>
        <Header/>

        <ViewContent>
          <Content>

            <ViewBalanceLeft>
                <TitleValue>Valor Total</TitleValue>
                <TitleValueAcount>R$ 10.000</TitleValueAcount>
            </ViewBalanceLeft>

            <ViewBalanceRight>
                <TitleCard>Cartão</TitleCard>
                <TitleCardBank>Nubank</TitleCardBank>
            </ViewBalanceRight>

          </Content>
        </ViewContent>
    </Container>
  )
}

