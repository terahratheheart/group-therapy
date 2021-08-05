import React, { ReactElement, useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./card.styles";
import Text from "../text/text";

type CardProps = {
    prompt: string;
    callbackFunction: any
} & TouchableOpacityProps;

export default function Card({ prompt, callbackFunction, style, ...props }: CardProps): ReactElement {

    const [cardView, setCardView] = useState("")

    return (
        <TouchableOpacity {...props} style={[styles.card, style]}
        onPress={() => {
            setCardView(prompt)
            callbackFunction()
            }}>
            <Text style={styles.cardText}>{cardView}</Text>
        </TouchableOpacity>
    );
}
