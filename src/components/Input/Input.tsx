import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { useTheme } from 'styled-components';
import { Container, InputContainer } from './styles'

interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
}

const Input: React.FC<InputProps> = ({ rightIcon, leftIcon }) => {

    const { COLORS } = useTheme();

    return (
        <Container>
            {leftIcon && (
                <Ionicons
                    name="mail-outline"
                    size={25}
                    color={COLORS.TEXTDARK}
                    style={{padding: 3, marginLeft:20}}
                />
            )}
            <InputContainer />

            {rightIcon && (
                <Ionicons
                name='lock-closed-outline'
                size={25}
                color={COLORS.TEXTDARK}
                style={{padding: 3, marginLeft: 20}}
                />
            )}
        </Container>
    )
}

export default Input
