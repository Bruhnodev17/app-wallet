import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Button, IconGoogle, Title} from './styles'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import PngGoogle from "../../assets/google.png"

interface Props extends RectButtonProps{
    title: string
}

const ButtonSocialGoogle: React.FC<Props> = ({title, ...rest}) => {
    return (
        <GestureHandlerRootView>
        <Button>
            <IconGoogle source={PngGoogle}resizeMode="contain"/>
            <Title>{title}</Title>
        </Button>
        </GestureHandlerRootView>
    )
}

export default ButtonSocialGoogle
