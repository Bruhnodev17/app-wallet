import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons"
import { useTheme } from 'styled-components';
import { Container, InputContainer } from './styles'
import { TextInputProps, TouchableOpacity } from 'react-native';
import theme from '@src/styles/theme';

interface InputProps {
    rightIcon?: boolean | string;
    leftIcon?: boolean | string;
    iconName: string;
    iconSize?: number;
    iconColor?: string;
    securetextentry?: boolean;
}

const Input: React.FC<InputProps> =
({ rightIcon, leftIcon, iconName, iconSize, iconColor, securetextentry, ...rest }) => {


    const { COLORS } = useTheme();
    const [secury, setSecury]  = useState(securetextentry)

    return (
        <Container>
            {leftIcon && (
                <Ionicons
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.TEXTDARK}
                    style={{padding: 3, }}
                    placeholder="Digite seu e-mail"
                    secureTextEntry={false}
                />
            )}
            <InputContainer
                {...rest}
                secureTextEntry={secury}
                underlineColorAndroid="transparent"
                placeholderTextColor={theme.COLORS.GRAY3}
            />

            {rightIcon && (
                <TouchableOpacity onPress={() => setSecury(!secury)}>
                    <Ionicons
                    name={secury ? 'eye' : 'eye-off'}
                    size={iconSize}
                    color={iconColor || COLORS.GRAY2}
                    style={{padding: 3, }}
                    placeholder="Digite sua senha"
                    />
                </TouchableOpacity>
            )}
        </Container>
    )
}

export default Input
