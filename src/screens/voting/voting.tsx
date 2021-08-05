import React, { ReactElement, useState } from "react";
import { View, ScrollView} from "react-native";
import styles from "./voting.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { Button, DrawerHeader, GradientBackground, Scoreboard, Text } from "@Components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ScreenNames } from "@config/navigator"
import { addScore, minusScore, resetGame, resetVoter, setPerformingTurn, setVotingTurn } from "../../redux/actions";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerActions } from "@react-navigation/native";

type VotingProps = {
    navigation: StackNavigationProp<StackNavigatorParams, ScreenNames.Voting>;
};

export default function Voting({ navigation }: VotingProps): ReactElement {

    // ------------------global state variables-----------------
    const players = useAppSelector(state => state.players)
    const performingPlayer = useAppSelector(state => state.turn.performingPlayerIndex)
    const votingPlayer = useAppSelector(state=> state.turn.votingPlayerIndex)
    const endOfVoting = useAppSelector(state=> state.turn.performingPlayerIndex === state.turn.votingPlayerIndex)
    const winner = useAppSelector(state=> state.scores[performingPlayer]?.score >= 23)
    const playerScores = useAppSelector(state=> state.scores)
    const performingPlayerName = players[performingPlayer]
    const votingPlayerName = players[votingPlayer]
    // --------local states--------------------
    const [withIt, setWithIt] = useState(0)
    const [copOut, setCopOut] = useState(0)

    // --------local variables--------------------
    const dispatch = useAppDispatch()
    const numOfPlayers = players.length
    const coppedOut = copOut >= (numOfPlayers-1)/2

    // ---------helper functions---------------
    function openDrawer(): any {
        navigation.dispatch(DrawerActions.openDrawer())
    }
    
    //-----------------------------------------
    return (
        <GradientBackground>
            <SafeAreaView>
            <DrawerHeader callbackFunction={openDrawer}/>
            <ScrollView contentContainerStyle={styles.container}>
                { !endOfVoting && !winner ?
                <>
                    <Text style={styles.title}>{votingPlayerName}'s vote for {performingPlayerName}</Text>
                    <View style={styles.buttons}>
                        <Button title="with it"
                        onPress={() => {
                            setWithIt(withIt + 1)
                            dispatch(addScore(performingPlayer))
                            dispatch(setVotingTurn(numOfPlayers))
                        
                        }}/>
                        <Button title="cop out"
                        onPress={() => {
                            setCopOut(copOut + 1)
                            dispatch(minusScore(performingPlayer))
                            dispatch(setVotingTurn(numOfPlayers))
                        }}/>
                    </View>
                </>
                : <Text> </Text> }
                { endOfVoting && !winner ? 
                <>
                    <Text style={styles.title}> voting results for {performingPlayerName} </Text> 
                    <Text style={styles.subtitle}>with it: {withIt} </Text>
                    <Text style={styles.subtitle}>cop out: {copOut} </Text>
                    { coppedOut ?
                    <>
                    <Text style={styles.subtitle}>copped out!</Text>
                    <Text style={styles.subtitle}>give them feedback on how they could have shown up more authentically</Text> 
                    </> :
                    <Text>  </Text> }
                    <Scoreboard players={playerScores}/>
                    

                    <Button title="next player"
                        onPress={() => {
                        dispatch(setPerformingTurn(numOfPlayers))
                        navigation.navigate(ScreenNames.PerformPrompt)
                        // dispatch(resetVoter())
                        dispatch(setVotingTurn(numOfPlayers))
                        dispatch(setVotingTurn(numOfPlayers))
        
                    }}/>
                </> : <Text> </Text>}
                {winner ? 
                <>
                <Text style={styles.subtitle}>{players[performingPlayer]} has become free!</Text>
                <Button title="end game"
                        onPress={() => {
                        navigation.navigate(ScreenNames.Home)
                        dispatch(resetGame())
                        
                    }}/>
                </>: <Text>  </Text>}
            </ScrollView>
            </SafeAreaView>
        </GradientBackground>
    );
}
