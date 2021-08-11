import React, { Fragment, ReactElement } from "react";
import styles from "./player-display.styles";
import { Player } from "@Components"
import { DeletePlayerIcon } from "@Components"
import { useAppDispatch} from "../../redux/hooks";
import { ScrollView, View } from "react-native";
import { removePlayer } from "../../redux/actions";



type PlayerDisplayProps = {
    players: string[]
}

export default function PlayerDisplay({players}: PlayerDisplayProps): ReactElement {
    const dispatch = useAppDispatch()
    const playerComponents = players.map((player, index) => {
        return (<View style={styles.container}>
                    <Fragment key={index}>
                        <DeletePlayerIcon 
                            style={styles.deleteButton}
                            onPress={() => {   
                            console.log(dispatch(removePlayer(index)))
                        }}
                            />
                        <Player
                            playerName={player}
                        ></Player>
                    </Fragment>
                </View>
        );
    });
        return <ScrollView>
            {playerComponents}
        </ScrollView>

    
}


