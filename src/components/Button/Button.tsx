import React from "react";
import { Container, Title, } from "./styles"
import { ButtonProps, Pressable } from "react-native";

interface IButtonProps {
    title: string;
    onPress: () => void;
}

export const Button: React.FC<IButtonProps> = ({
     title, onPress = () => { } }
     ) => {
    return (
        <Container onPress={onPress}>
            <Title>{title}</Title>
        </Container>
    );
}

