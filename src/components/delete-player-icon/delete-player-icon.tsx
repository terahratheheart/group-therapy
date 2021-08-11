import React, { ReactElement } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./delete-player-icon.styles";
import { AntDesign } from '@expo/vector-icons';

type DeletePlayerIconProps = {
} & TouchableOpacityProps;

export default function DeletePlayerIcon({...props}: DeletePlayerIconProps): ReactElement {
    return (
        <TouchableOpacity style={styles.button} {...props}>
            <AntDesign name="minuscircleo" size={24} color="white" />
        </TouchableOpacity>
    );
}
