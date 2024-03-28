import React, {
    ForwardedRef, useCallback, useState, useImperativeHandle, useRef, useEffect
} from "react";

import { useField } from "@unform/core";
import { Text, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { useTheme } from "styled-components";

import { Container, IContainer, InputText } from "./styles";

interface InputRef {
    focus(): void;
}

interface InputValueReference {
    value: string;
}

interface InputProps extends TextInputProps {
    name: string;
    value?: string;
    iconName?: React.ComponentProps<typeof Ionicons>["name"];
    containerStyle?: { [key: string]: string | number }
}


const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({
    iconName,
    name,
    value,
    containerStyle,
    ...rest
}) => {
    const theme = useTheme();


    const [hasError, setHasError] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    return (
        <Container style={containerStyle}>
            <IContainer isFilled={isFilled} hasErrors={hasError} isFocused={isFocused}>

                <Ionicons
                    name={iconName}
                    size={25}
                    color=
                    {
                        isFocused || hasError || isFilled ?
                            theme.COLORS.BLUE1 : theme.COLORS.GRAY5
                    }
                />
            </IContainer>

            <InputText
                isFilled={isFilled}
                hasErrors={hasError}
                isFocused={isFocused}
            />
        </Container>
    )
}

export default Input
