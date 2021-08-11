
import React, { Fragment, ReactElement } from "react";
import styles from "./scoreboard.styles";
import { Player } from "@Components"
import {useAppSelector} from "../../redux/hooks";
import { ScrollView, View } from "react-native";
import { Text } from "@Components"


type playerScores = {
    playerName: string,
    score: number
}

type ScoreboardProps = {
    players: playerScores[]
}

export default function Scoreboard({players}: ScoreboardProps): ReactElement {


    const playerComponents = players.map((player, index) => {
        return (
                <View style={styles.container}>
                    <Fragment key={index}>
                        <Text style={styles.player}>{player.playerName}</Text>
                        <Text style={styles.score}> - score: {player.score}
                        </Text>
                    </Fragment>
                </View>
        );
    });
        return <ScrollView>
            {playerComponents}
        </ScrollView>

    
}


