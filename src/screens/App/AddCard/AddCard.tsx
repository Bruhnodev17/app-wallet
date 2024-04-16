import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { Container, Title, Content, SubTitle, ContentChip, ContentVisa } from './styles';
import { GoBack } from '@src/components/GoBack';

export const AddCard = () => {
    const rotation = useRef(new Animated.Value(0)).current;

    const handlePress = () => {
        Animated.timing(rotation, {
            toValue: 2,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => {
            rotation.setValue(0);
        });
    };

    const spin = rotation.interpolate({
        inputRange: [0, 2],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <>
            <GoBack />
            <Container>
                <Title>Adicionar Cartão</Title>
                <TouchableOpacity onPress={handlePress}>
                    <Animated.View style={{ transform: [{ rotate: spin }] }}>
                        <Content
                            source={require('../../../assets/addcard.png')}
                        >
                            <ContentChip
                                source={require('../../../assets/chipcard.png')}
                            />
                            <ContentVisa
                                source={require('../../../assets/visa.webp')}
                            />
                        </Content>
                    </Animated.View>
                </TouchableOpacity>
                <SubTitle>
                    Adicione um novo cartão {'\n'} na carteira para uma vida mais fácil! 😄
                </SubTitle>
            </Container>
        </>
    );
};
