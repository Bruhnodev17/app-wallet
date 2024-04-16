import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    margin-top: ${Platform.OS === "ios"? 20: 35}px;
    padding: 20px;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    margin-top: 40px;
`
