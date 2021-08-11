import React, { ReactElement } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./cop-out-button.styles";
import Text from "../text/text";

type CopOutButtonProps = {
    title: string;
} & TouchableOpacityProps;

export default function CopOutButton({ title, style, ...props }: CopOutButtonProps): ReactElement {
    return (
        <TouchableOpacity {...props} style={[styles.button, style]}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
