import React, { ReactElement, useState } from "react";
import { View, ScrollView} from "react-native";
import styles from "./scores.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { Button, DrawerHeader, GradientBackground, Scoreboard, Text } from "@Components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ScreenNames } from "@config/navigator"
import { addScore, minusScore, resetGame, resetVoter, setPerformingTurn, setVotingTurn } from "../../redux/actions";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerActions } from "@react-navigation/native";

type ScoresProps = {
    navigation: StackNavigationProp<StackNavigatorParams, ScreenNames.Scores>;
};

export default function Scores({ navigation }: ScoresProps): ReactElement {

    // ------------------global state variables-----------------
    const players = useAppSelector(state => state.players)
    const performingPlayer = useAppSelector(state => state.turn.performingPlayerIndex)
    const votingPlayer = useAppSelector(state=> state.turn.votingPlayerIndex)
    const playerScores = useAppSelector(state=> state.scores)
    // --------local states--------------------

    // --------local variables--------------------
    const dispatch = useAppDispatch()
    const numOfPlayers = players.length

    // ---------helper functions---------------
    function openDrawer(): any {
        navigation.dispatch(DrawerActions.openDrawer())
    }

    function endGame(): any{
        dispatch(resetGame())
        navigation.navigate(ScreenNames.Home)
    }

    //-----------------------------------------
    return (
        <GradientBackground>
            <DrawerHeader drawerOpenCallback={openDrawer} endGameCallback={openDrawer}/>
            <SafeAreaView style={styles.container}>   
            <ScrollView>
                    <View style={styles.titleContainer}>
                    <Text style={styles.title}>score</Text>
                    </View>

                    <View style={styles.scoreboardContainer}>
                    <View style={styles.scoreboard}>
                        <Scoreboard players={playerScores}/>
                    </View>
                    </View>
            
                <View style={styles.buttonContainer}>
                    <Button 
                        title="next player >"
                        style={styles.button}
                        onPress={() => {
                        dispatch(setPerformingTurn(numOfPlayers))
                        navigation.navigate(ScreenNames.PerformPrompt)
                        dispatch(setVotingTurn(numOfPlayers))
                    }}/>
                    
                </View> 
            </ScrollView>
            </SafeAreaView>
        </GradientBackground>
    );
}
