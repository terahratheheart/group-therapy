import React, { ReactElement } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./with-it-button.styles";
import Text from "../text/text";

type WithItButtonProps = {
    title: string;
} & TouchableOpacityProps;

export default function WithItButton({ title, style, ...props }: WithItButtonProps): ReactElement {
    return (
        <TouchableOpacity {...props} style={[styles.button, style]}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
