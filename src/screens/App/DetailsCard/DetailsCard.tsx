import { View, Text } from 'react-native'
import React from 'react'

import {
    CardImage, Container, Title,
    ViewDetails, Name, Bank, Acount, Status, Validity,
    ViewInfo, InfoTitle,
} from './styles'
import { Button } from "../../../components/CustomButton/CustomButton"


import { GoBack } from '@src/components/GoBack'

export const DetailsCard = () => {
    return (
        <>
            <GoBack />
            <Container>
                <Title>Detalhes do cartão</Title>

                <CardImage
                    source={require('../../../assets/carddetails.png')}
                />

                <ViewDetails>

                    <ViewInfo>
                        <InfoTitle>Nome</InfoTitle>
                        <Name>Manoel Bruno</Name>
                    </ViewInfo>

                    <ViewInfo>
                        <InfoTitle>Banco</InfoTitle>
                        <Bank>Nubank</Bank>
                    </ViewInfo>

                    <ViewInfo>
                        <InfoTitle>Conta</InfoTitle>
                        <Acount>000000-0</Acount>
                    </ViewInfo>

                    <ViewInfo>
                        <InfoTitle>Status</InfoTitle>
                        <Status>Ativo</Status>
                    </ViewInfo>

                    <ViewInfo>
                        <InfoTitle>Validade</InfoTitle>
                        <Validity>Jan/2028</Validity>
                    </ViewInfo>

                </ViewDetails>


                <Button
                    title='Deletar Cartão'
                    onPress={() => { }}
                    iconName={'delete'}
                    variant='transparent'

                    style={{ marginTop: 30, }}
                />
            </Container>


        </>
    )
}

