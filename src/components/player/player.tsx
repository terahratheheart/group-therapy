import React, { ReactElement } from "react";
import styles from "./player.styles";
import Text from "../text/text";

type PlayerProps = {
    playerName: string
};

export default function PlayerIcon({playerName}: PlayerProps): ReactElement {
    return (
            <Text style={styles.playerText}>{playerName}</Text>
    );
}
