import { View, Text } from 'react-native'
import React from 'react'

import { Login } from '@src/screens/Auth/Login'
import { Register } from '@src/screens/Auth/Register'
import { RecoveryPassword } from '@src/screens/Auth/RecoveryPassword'




export const AuthRoutes = () => {
  return (
    <View>
      <Text>
        <Login />
      </Text>
    </View>
  )
}


