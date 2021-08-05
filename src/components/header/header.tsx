import React, { ReactElement} from "react";
import { Alert, TouchableOpacity, TouchableOpacityProps} from "react-native";
import { Header } from "react-native-elements"
import styles from "./header.styles";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


type DrawerHeaderProps = {
    drawerOpenCallback: any,
    endGameCallback: any
} & TouchableOpacityProps;

export default function DraweHeader({drawerOpenCallback, endGameCallback, ...props}: DrawerHeaderProps): ReactElement {
    return (
        <Header 
        leftComponent = {<TouchableOpacity onPress={() => {
            drawerOpenCallback()
            }}>
            <Entypo name="menu" size={24} color="white" />
            </TouchableOpacity>}
        rightComponent = {<TouchableOpacity onPress={() => Alert.alert(
                    "end session? ",
                    "are you sure you want to end the session?",
                    [
                    {
                        text: "yes",
                        onPress: () => endGameCallback(),
                    },
                    { text: "no", onPress: () => console.log("nope") }
                    ]
                )}>
            <AntDesign name="closecircle" size={24} color="white" />
            </TouchableOpacity>}
        containerStyle={{
            backgroundColor: '#000000',
        }}    

        />
        
    );
}
