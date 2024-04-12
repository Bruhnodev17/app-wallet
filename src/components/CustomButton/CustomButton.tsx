import React from "react";
import { ActivityIndicator, } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useTheme } from "styled-components";
import { Container, Content, Title, } from "./styles"
import { variants } from "./Variant";
import { TouchableOpacityProps } from "react-native-gesture-handler";


interface IButtonProps {
    title: string;
    onPress: () => void;
    iconName: keyof typeof AntDesign.glyphMap;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'outline' | 'black' | 'transparent';
    style?: TouchableOpacityProps['style']
}

export const Button: React.FC<IButtonProps> = ({
    title,
    onPress = () => { },
    isLoading,
    iconName,
    disabled,
    variant = 'primary',
    style

}) => {
    const { COLORS } = useTheme()
    const buttonVariant = variants[variant];
    const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled;


    return (
        <Container
            disabled={isLoading || disabled}
            style={[buttonStyle.button, style]}
            onPress={onPress}>
            {isLoading ? (
                <ActivityIndicator color={COLORS.GRAY1} />
            ) : (
                <Content>
                    {iconName && (
                        <AntDesign name={iconName} size={25} color={buttonStyle.icon.color}
                            style={{ marginRight: 15 }} />
                    )}
                    <Title>{title}</Title>

                </Content>
            )}
        </Container>
    );
}


