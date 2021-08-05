import React, { ReactElement, useState } from "react";
import { TextInput, SafeAreaView } from "react-native";
import { Text, GradientBackground, Button, PlayerDisplay} from "@Components"
import styles from "./enter-players.styles";
import { addPlayer } from "../../redux/actions";
import { ScreenNames } from "../../config/navigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

type EnterPlayerProps = {
    navigation: StackNavigationProp<StackNavigatorParams, ScreenNames.EnterPlayers>;
};

export default function EnterPlayers({ navigation }: EnterPlayerProps): ReactElement {
    //-----------------------------global state------------
    const players = useAppSelector(state => state.players)
    //---------------------------local state--------------
    const [newPlayer, onChangeNewPlayer] = useState("");
    const [errorMsg, setErrorMsg] = useState("")

    const dispatch = useAppDispatch()

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>

                <Text style={styles.title}>enter players</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNewPlayer}
                    value={newPlayer}/>
                <Button style={styles.button}
                        title="enter player"
                        onPress={() => { 
                        if(newPlayer != "" && !players.includes(newPlayer) && players.length < 8){
                            setErrorMsg("")
                            dispatch(addPlayer(newPlayer))
                            onChangeNewPlayer("")}
                        else if(players.length >= 8){
                            setErrorMsg("no more than 8 players")
                        }
                        else if(newPlayer === ""){
                            setErrorMsg("must enter player name")
                        }
                        else if (players.includes(newPlayer)){
                            setErrorMsg("player name must be unique")
                        }
                        }}
                        />
                <Button
                        onPress={() => {
                        if(players.length < 3){
                            setErrorMsg("must have three players to begin")
                        } else {
                            navigation.navigate(ScreenNames.PerformPrompt)};
                        }}
                        style={styles.button}
                        title="begin session"/>

                {/* error message display */}
                    <Text style={styles.errormsg}>
                        {errorMsg ? errorMsg: ''}
                    </Text>

                <PlayerDisplay players={players}/>
    
            </SafeAreaView>
        </GradientBackground>
    );
}
