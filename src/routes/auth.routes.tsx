import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '@src/screens/Auth/Login'
import { Register } from '@src/screens/Auth/Register'
import { RecoveryPassword } from '@src/screens/Auth/RecoveryPassword'


const {Navigator, Screen,} = createNativeStackNavigator();


export const AuthRoutes = () => {
  return (
    <Navigator
    initialRouteName='Register'
    screenOptions={{
        headerShown: false
    }}

    >
      <Screen name='Login' component={Login}/>
      <Screen name='Register' component={Register}/>
      <Screen name='RecoveryPassword' component={RecoveryPassword}/>
    </Navigator>

  )
}


