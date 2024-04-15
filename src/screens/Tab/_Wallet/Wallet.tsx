import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

import {
    Container, Content, ViewContent,
    ViewBalanceLeft, ViewBalanceRight, TitleValue, TitleCard,
    TitleValueAcount, TitleCardBank, BodyButtons,
    IconPayment, IconTransfer, IconPayOut, IconTopUp, TitleIcon,
    FooterList,  ContentFlat,ContentFlatHeader,Title, ButtonShowAll,
    ButtonTitleShowAll,ContentFlatFooter, IconTransaction, DetailsTransaction, NameTransaction,
    SubTitleTransaction, AmountTransaction,
} from './styles'

import { Header } from '@src/components/Header/Header'
import { transaction } from '@src/utils/transctions'

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
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <IconTransfer source={require('../../../assets/export.png')} />
                        <TitleIcon>Transferências</TitleIcon>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <IconPayment source={require('../../../assets/convert.png')} />
                        <TitleIcon>Pagamentos</TitleIcon>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <IconPayOut source={require('../../../assets/money-send.png')} />
                        <TitleIcon>Pagamento</TitleIcon>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <IconTopUp source={require('../../../assets/add-circle.png')} />
                        <TitleIcon>Mais Opções</TitleIcon>
                    </TouchableOpacity>

                </BodyButtons>

                <FooterList>
                    <FlatList
                        data={transaction}
                        renderItem={({ item }) => (
                            <ContentFlat>
                                <ContentFlatHeader>
                                    <Title>Minhas transações</Title>
                                    <ButtonShowAll>
                                        <ButtonTitleShowAll>Ver Todos</ButtonTitleShowAll>
                                    </ButtonShowAll>
                                </ContentFlatHeader>

                                <ContentFlatFooter>
                                    <IconTransaction />
                                    <DetailsTransaction>
                                        <NameTransaction>NetFlix</NameTransaction>
                                        <SubTitleTransaction>Valor da Netflix</SubTitleTransaction>
                                    </DetailsTransaction>
                                    <AmountTransaction>R$ 50.00</AmountTransaction>
                                </ContentFlatFooter>
                            </ContentFlat>
                        )}
                    >

                    </FlatList>
                </FooterList>
            </ViewContent>
        </Container>
    )
}

