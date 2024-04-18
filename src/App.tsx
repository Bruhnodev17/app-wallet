import React from "react";
import AppLoading from "expo-app-loading"
import { View, Text } from 'react-native';
import { ThemeProvider } from "styled-components/native"
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from "./routes";


import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins"

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

import COLORS from "../src/styles/theme";
import {} from "./routes"

  const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
    })

    return (
        <ThemeProvider theme={COLORS}>
            <NavigationContainer>

            <StatusBar
            style="dark"
            translucent
            backgroundColor="dark"
            />

                <Routes />

            </NavigationContainer>
        </ThemeProvider>
    )
}

export default App;
