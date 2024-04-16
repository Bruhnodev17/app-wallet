import { View, Text } from 'react-native'
import React from 'react'
import { Container } from './styles'
import {CaretCircleLeft} from "phosphor-react-native"
import theme from '@src/styles/theme'
import { useNavigation } from '@react-navigation/native'

export const GoBack = () => {
    const navigation = useNavigation()


  return (
    <Container onPress={() => navigation.goBack()}>
     <CaretCircleLeft
     size={45}
     weight='regular'
    color={theme.COLORS.PURPLE}
     />
    </Container>
  )
}

