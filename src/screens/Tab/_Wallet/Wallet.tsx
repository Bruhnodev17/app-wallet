import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import {
    Container, Content, ViewContent,
    ViewBalanceLeft, ViewBalanceRight, TitleValue, TitleCard,
    TitleValueAcount, TitleCardBank, BodyButtons,
    IconPayment, IconTransfer, IconPayOut, IconTopUp, TitleIcon
} from './styles'

import { Header } from '@src/components/Header/Header'

export const Wallet = () => {
    return (
        <Container>
            <Header />

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

                <BodyButtons>
                    <TouchableOpacity style={{alignItems: "center"}}>
                        <IconTransfer source={require('../../../assets/export.png')} />
                        <TitleIcon>Transferências</TitleIcon>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems: "center"}}>
                        <IconPayment source={require('../../../assets/convert.png')} />
                        <TitleIcon>Pagamentos</TitleIcon>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems: "center"}}>
                        <IconPayOut source={require('../../../assets/money-send.png')} />
                        <TitleIcon>Pagamento</TitleIcon>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems: "center"}}>
                        <IconTopUp source={require('../../../assets/add-circle.png')} />
                        <TitleIcon>Mais Opções</TitleIcon>
                    </TouchableOpacity>

                </BodyButtons>
            </ViewContent>
        </Container>
    )
}

