import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Fontisto } from "@expo/vector-icons"
import { Button, IconFacebook, Title} from './styles'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

interface Props extends RectButtonProps{
    title: string;
    iconName: React.ComponentProps<typeof Fontisto>["name"]
};

const ButtonSocial: React.FC<Props> = ({title, iconName, ...rest}) => {
    return (
        <GestureHandlerRootView>
        <Button>
            <IconFacebook name={iconName}/>
            <Title>{title}</Title>
        </Button>
        </GestureHandlerRootView>
    )
}

export default ButtonSocial
