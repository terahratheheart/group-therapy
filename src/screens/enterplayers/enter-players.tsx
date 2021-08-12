import React, { ReactElement, useState } from "react";
import { TextInput, SafeAreaView, View } from "react-native";
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
    //------------------------redux actions--------------------
        const dispatch = useAppDispatch()
    //-----------------------------global state---------------
    const players = useAppSelector(state => state.players)
    //---------------------------local state------------------
    const [newPlayer, onChangeNewPlayer] = useState("");
    const [errorMsg, setErrorMsg] = useState("")

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
    
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>enter players:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNewPlayer}
                            value={newPlayer}/>
                    {errorMsg ?
                        <Text style={styles.errormsg}>
                    {errorMsg} </Text>: <></>} 
                </View>

                <View style={styles.buttonContainer}>        
                    <Button title="enter player"
                            style={styles.button}
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
                    <Button title="begin session"
                            style={styles.button}
                            onPress={() => {
                            if(players.length < 3){
                                setErrorMsg("must have three players to begin")
                            } else {
                                navigation.navigate(ScreenNames.PerformPrompt)};
                            }}/>
                </View>

                <PlayerDisplay players={players}/>  
                               
            </SafeAreaView>
        </GradientBackground>
    );
}
