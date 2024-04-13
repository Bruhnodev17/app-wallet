import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import theme from '@src/styles/theme'
import { Bell, ChartBar, CreditCard, GearSix } from 'phosphor-react-native';

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
                    paddingBottom: 5,
                    backgroundColor: theme.COLORS.GRAY6,
                    marginBottom: 12,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    color: theme.COLORS.GRAY3
                }
            }}
        >
            <Screen
                name='Wallet'
                component={Wallet}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused }) => (
                        <View
                        style={{alignItems: "center", justifyContent:"center"}}
                        >
                            {focused ? (
                                <CreditCard size={25} weight='fill'
                                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3} />
                            ):(
                                <CreditCard size={25} weight='light'
                                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3} />
                            )}

                        </View>
                    )
                }}
            />

            <Screen
                name='Report'
                component={Report}
                options={{
                    tabBarLabel: "Relatório",
                    tabBarIcon: ({ focused }) => (
                        <View
                        style={{alignItems: "center", justifyContent:"center"}}
                        >
                            {focused ? (
                                <ChartBar size={25} weight='fill'
                                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3} />
                            ):(
                                <ChartBar size={25} weight='light'
                                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3} />
                            )}

                        </View>
                    )
                }}
            />
            <Screen
                name='Notification'
                component={Notification}
                options={{
                    tabBarLabel: "Notificações",
                    tabBarIcon: ({ focused }) => (
                        <View
                        style={{alignItems: "center", justifyContent:"center"}}
                        >
                            {focused ? (
                                <Bell size={25} weight='fill'
                                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3} />
                            ):(
                                <Bell size={25} weight='light'
                                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3} />
                            )}

                        </View>
                    )
                }}
            />
            <Screen
                name='Settings'
                component={Settings}
                options={{
                    tabBarLabel: "Ajustes",
                    tabBarIcon: ({ focused }) => (
                        <View
                        style={{alignItems: "center", justifyContent:"center"}}
                        >
                            {focused ? (
                                <GearSix size={25} weight='fill'
                                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3} />
                            ):(
                                <GearSix size={25} weight='light'
                                color={focused ? theme.COLORS.GRAY1 : theme.COLORS.GRAY3} />
                            )}

                        </View>
                    )
                }}
            />
        </Navigator>
    )
}

