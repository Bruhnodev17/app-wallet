import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { useTheme } from 'styled-components';
import { Container, InputContainer } from './styles'
import { TextInputProps } from 'react-native';
import theme from '@src/styles/theme';

interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName: string;
    iconSize?: number;
    iconColor?: string;
}

const Input: React.FC<InputProps> = ({ rightIcon, leftIcon, iconName, iconSize, iconColor, ...rest }) => {

    const { COLORS } = useTheme();

    return (
        <Container>
            {leftIcon && (
                <Ionicons
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.TEXTDARK}
                    style={{padding: 3, }}
                    placeholder="Digite seu e-mail"
                />
            )}
            <InputContainer
                {...rest}
                placeholderTextColor={theme.COLORS.GRAY3}
            />

            {rightIcon && (
                <Ionicons
                name={iconName}
                size={iconSize}
                color={iconColor || COLORS.TEXTDARK}
                style={{padding: 3, }}
                placeholder="Digite sua senha"
                />
            )}
        </Container>
    )
}

export default Input
