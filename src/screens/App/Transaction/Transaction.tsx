import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import {Container,
    FooterList,  ContentFlat, IconTransaction, DetailsTransaction, NameTransaction,
    SubTitleTransaction, AmountTransaction,} from "./styles"

import { Header } from '@src/components/Header'
import { transaction } from '@src/utils/transctions'

export const Transaction = () => {
  return (
    <>
    <Header appName='Transações'
    iconLeft
    typeCash
    />
    <Container>
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
                        showsVerticalScrollIndicator={false}
                    >

                    </FlatList>
                </FooterList>
    </Container>
    </>

  )
}

