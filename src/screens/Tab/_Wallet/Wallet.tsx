import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'

import {
    Container, Content, ViewContent,
    ViewBalanceLeft, ViewBalanceRight, TitleValue, TitleCard,
    TitleValueAcount, TitleCardBank, BodyButtons,
    IconPayment, IconTransfer, IconPayOut, IconTopUp, TitleIcon,
    FooterList,  ContentFlat,ContentFlatHeader,Title, ButtonShowAll,
    ButtonTitleShowAll, IconTransaction, DetailsTransaction, NameTransaction,
    SubTitleTransaction, AmountTransaction,
} from './styles'

import { Header } from '@src/components/Header/Header'
import { transaction } from '@src/utils/transctions'

export const Wallet = () => {
    return (
        <Container>
            <Header appName='Wallet' isActiveText AvatarRight />

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

            </ViewContent>

            <FooterList>
                    <FlatList
                        data={transaction}
                        renderItem={({ item }) => (
                            <ScrollView scrollEnabled={true} >
                            <ContentFlat>

                                    <IconTransaction
                                    source={item.icon}
                                    />
                                    <DetailsTransaction>
                                        <NameTransaction>{item.title}</NameTransaction>
                                        <SubTitleTransaction>{item.subtitle}</SubTitleTransaction>
                                    </DetailsTransaction>
                                    <AmountTransaction>R$ {item.amount.toFixed(2)}</AmountTransaction>

                            </ContentFlat>
                            </ScrollView>
                        )}

                        ListHeaderComponent={
                            <ContentFlatHeader>
                                    <Title>Minhas transações</Title>
                                    <ButtonShowAll>
                                        <ButtonTitleShowAll>Ver Todos</ButtonTitleShowAll>
                                    </ButtonShowAll>
                                </ContentFlatHeader>
                        }
                        showsVerticalScrollIndicator={false}
                    >

                    </FlatList>
                </FooterList>
        </Container>
    )
}

