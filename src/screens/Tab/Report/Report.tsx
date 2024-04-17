import { View, Text } from 'react-native'
import React from 'react'
import {
    Container, ImageBalance, AmountValue,
    ViewContent, TitleAmount, TotalAmount,
     FooterList, ContentFlat, ContentFlatHeader, Title, ButtonShowAll,
    ButtonTitleShowAll, IconTransaction, DetailsTransaction, NameTransaction,
    SubTitleTransaction, AmountTransaction,
} from './styles'

import { Header } from "../../../components/Header"
import { FlatList, ScrollView, } from 'react-native'
import { transaction } from '@src/utils/transctions'

export const Report = () => {
    return (
        <>
            <Header
                iconLeft
                typeReport
                appName='Relatório' />
            <Container>

                <ImageBalance resizeMode='contain'
                    source={require('../../../assets/estatistica.png')}
                />
                <AmountValue>R$ 500.00</AmountValue>

                <ViewContent>
                    <TitleAmount>Valor Total</TitleAmount>
                    <TotalAmount>R$ 10.000</TotalAmount>


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
                                    <ButtonTitleShowAll>Mais Recentes</ButtonTitleShowAll>
                                </ButtonShowAll>
                            </ContentFlatHeader>
                        }
                        showsVerticalScrollIndicator={false}
                    >

                    </FlatList>
                </FooterList>
            </Container>
        </>
    )
}

