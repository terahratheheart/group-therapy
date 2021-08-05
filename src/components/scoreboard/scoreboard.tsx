
import React, { Fragment, ReactElement } from "react";
import styles from "./scoreboard.styles";
import { Player } from "@Components"
import {useAppSelector} from "../../redux/hooks";
import { ScrollView } from "react-native";
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
        return (<Fragment key={index}>
                <Player
                    playerName={player.playerName}
                ></Player>
                <Text style={styles.score}>
                score: {player.score}
                </Text>
                </Fragment>
        );
    });
        return <ScrollView>
            {playerComponents}
        </ScrollView>

    
}


