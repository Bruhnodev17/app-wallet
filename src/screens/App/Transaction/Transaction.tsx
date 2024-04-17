import { FlatList, ScrollView } from 'react-native'
import React from 'react'
import {Container,
    FooterList,  ContentFlat, IconTransaction, DetailsTransaction, NameTransaction,
    SubTitleTransaction, AmountTransaction, ButtonGoBack} from "./styles"

import { Header } from '@src/components/Header'
import { transaction } from '@src/utils/transctions'
import { CaretDoubleLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import theme from '@src/styles/theme'

export const Transaction = () => {
    const navigation = useNavigation()

    const handleGoBackHome = () =>{
        navigation.goBack()
    }
  return (
    <>
    <Header appName='Minhas Transações'
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
                <ButtonGoBack onPress={handleGoBackHome}>
                    <CaretDoubleLeft color={theme.COLORS.PURPLE}
                    weight='bold' size={30}/>
                </ButtonGoBack>
    </Container>
    </>

  )
}

