import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { TabRoutes } from './tab.routes'
import  {Profile} from "../screens/App/Profile"
import { AddCard } from '@src/screens/App/AddCard'
import { DetailsCard } from '@src/screens/App/DetailsCard'
import { Transaction } from '@src/screens/App/Transaction'

const {Navigator, Screen,} = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
        initialRouteName='TabRoutes'
        screenOptions={{
            headerShown: false,
        }}
    >

        <Screen
        name='TabRoutes' component={TabRoutes}
        />
        <Screen
        name='Profile' component={Profile}
        />
        <Screen
        name='AddCard' component={AddCard}
        />
        <Screen
        name='DetailsCard' component={DetailsCard}
        />
        <Screen
        name='Transaction' component={Transaction}
        />

        </Navigator>
  )
}

