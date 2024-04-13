import styled from "styled-components/native";
import theme from "@src/styles/theme";
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.View `
    padding: 30px;
`

export const ContentHeader = styled.View`
    width: 100%;
    margin-left: -10px;
    align-items: center;
    justify-content: space-between;
`
export const Title = styled.Text`
    text-align: center;
    font-size: 25px;
    margin-top: 50px;
    font-family: ${({}) => theme.FONTS.POPPINSMEDIUM};
`
export const Description = styled.Text`
    margin-bottom: 10px;
    margin-top: 60px;
    font-size: 30px;
    font-family: ${({}) => theme.FONTS.POPPINSMEDIUM};

`
export const ContentBody = styled.View`
    margin-bottom: 20px;
`

export const ContentFooter = styled.View`
    margin-top: 30px;
    align-items: center;
    justify-content: center;
`


export const ButtonFooter = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    flex-direction: row;

`
 export const Title1 = styled.Text`
    font-size: 16px;
    color: ${({}) => theme.COLORS.GRAY3};
    font-family: ${({}) => theme.FONTS.POPPINSMEDIUM};

 `


  export const Title2 = styled.Text`
      font-size: 17px;
      color: blue;
    font-family: ${({}) => theme.FONTS.POPPINSBOLD};
    margin-left: 10px;

  `
