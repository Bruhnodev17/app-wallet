import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { Payments } from "../../../assets/export.png"
import { Transfer } from "../../../assets/convert.png"
import { PayOut } from "../../../assets/money-send.png"
import { TopUp } from "../../../assets/add-circle.png"

import {
    Container, Content, ViewContent,
    ViewBalanceLeft, ViewBalanceRight, TitleValue, TitleCard,
    TitleValueAcount, TitleCardBank, BodyButtons,
    IconPayment, IconTransfer, IconPayOut, IconTopUp,
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
                    <TouchableOpacity>
                        <IconPayment source={Payments} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconTransfer source={Transfer} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconPayOut source={PayOut} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconTopUp source={TopUp} />
                    </TouchableOpacity>

                </BodyButtons>
            </ViewContent>
        </Container>
    )
}

