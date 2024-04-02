import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { useTheme } from 'styled-components';
import { Container, InputContainer } from './styles'

interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName: string;
    iconSize?: number;
    iconColor?: string;
}

const Input: React.FC<InputProps> = ({ rightIcon, leftIcon, iconName, iconSize, iconColor }) => {

    const { COLORS } = useTheme();

    return (
        <Container>
            {leftIcon && (
                <Ionicons
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.TEXTDARK}
                    style={{padding: 3, }}
                />
            )}
            <InputContainer />

            {rightIcon && (
                <Ionicons
                name={iconName}
                size={iconSize}
                color={iconColor || COLORS.TEXTDARK}
                style={{padding: 3, }}
                />
            )}
        </Container>
    )
}

export default Input
