import { useTheme } from "styled-components";
import theme from "@src/styles/theme";

interface ButtonStyle {
    button: {
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string;
    },
    title: {
        color: string;
    },
    icon: {
        color: string;
    }
}

export interface ButtonVariant {
    enabled: ButtonStyle;
    disabled: ButtonStyle;
}

const ButtonPrimary: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.PRIMARY,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
    disabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    }
}


const buttonOutline: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: theme.COLORS.PRIMARY
        },
        title: {
            color: theme.COLORS.GRAY1,
        },
        icon: {
            color: theme.COLORS.GRAY1,
        },
    },
    disabled: {
        button: {
            backgroundColor: "transparent",
        },
        title: {
            color: theme.COLORS.GRAY_100,
        },
        icon: {
            color: theme.COLORS.GRAY_100,
        },
    }
}


const buttonBlack: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: "transparent",
        },
        title: {
            color: theme.COLORS.ORANGE_300,
        },
        icon: {
            color: theme.COLORS.ORANGE_300,
        },
    },
    disabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
        },
        title: {
            color: theme.COLORS.WHITE,
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    }
};

const buttonTransparent: ButtonVariant ={
    enabled: {
        button:{
            backgroundColor: "transparent"
        },
        title: {
            color: theme.COLORS.GRAY2
        },
        icon:{
            color: theme.COLORS.GRAY2
        }
    },
    disabled:{
        button:{
            backgroundColor: "transparent"
        },
        title: {
            color: theme.COLORS.GRAY2
        },
        icon:{
            color:theme.COLORS.GRAY2
        }
    }
}


export const variants = {
    primary: ButtonPrimary,
    outline: buttonOutline,
    black: buttonBlack,
    transparent: buttonTransparent,
}
