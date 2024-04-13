import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import theme from '@src/styles/theme'

import { Wallet } from '@src/screens/Tab/_Wallet'
import { Notification } from '@src/screens/Tab/Notification'
import { Report } from '@src/screens/Tab/Report'
import { Settings } from '@src/screens/Tab/Settings'

const { Navigator, Screen } = createBottomTabNavigator()

export const TabRoutes = () => {
    return (
        <Navigator
            initialRouteName='Wallet'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarInactiveTintColor: theme.COLORS.GRAY4,
                tabBarActiveTintColor: theme.COLORS.GRAY1,
                tabBarStyle: {
                    paddingBottom: 7,
                    backgroundColor: theme.COLORS.GRAY6,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    shadowOpacity: 0.2,
                }
            }}
        >
            <Screen
                name='Wallet'
                component={Wallet}
            />

            <Screen
                name='Report'
                component={Report}
            />
            <Screen
             name='Notification'
             component={Notification}
             />
            <Screen
            name='Settings'
            component={Settings}
            />
        </Navigator>
    )
}

