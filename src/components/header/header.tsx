import React, { ReactElement} from "react";
import { TouchableOpacity, TouchableOpacityProps} from "react-native";
import { Header } from "react-native-elements"
import styles from "./header.styles";
import { Entypo } from '@expo/vector-icons';

type DrawerHeaderProps = {
    callbackFunction: any
} & TouchableOpacityProps;

export default function DraweHeader({callbackFunction, ...props}: DrawerHeaderProps): ReactElement {
    return (
        <Header 
        leftComponent = {<TouchableOpacity onPress={() => {
            callbackFunction()
            }}>
            <Entypo name="menu" size={24} color="white" />
            </TouchableOpacity>}
        containerStyle={{
            backgroundColor: '#000000',
        }}    
        />
        
    );
}
