import React, { ReactElement, useState } from "react";
import { View, ScrollView} from "react-native";
import styles from "./voting.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { WithItButton, CopOutButton, Button, DrawerHeader, GradientBackground, Scoreboard, Text } from "@Components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ScreenNames } from "@config/navigator"
import { addScore, minusScore, resetGame, setPerformingTurn, setVotingTurn } from "../../redux/actions";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerActions } from "@react-navigation/native";
// import { openDrawer } from "../../utils/helper-function"
// import { endGame } from "../../utils/helper-function"

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
    const withItt = withIt > (numOfPlayers-1)/2

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
            <DrawerHeader drawerOpenCallback={openDrawer} endGameCallback={endGame}/>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    { !endOfVoting && !winner ?
                    <>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{votingPlayerName}'s vote for {performingPlayerName}</Text>
                        </View>  
                        <View style={styles.buttonContainer}>
                            <WithItButton 
                                title="with it"
                                style={[styles.button, styles.withItButton]}
                                onPress={() => {
                                setWithIt(withIt + 1)
                                dispatch(addScore(performingPlayer))
                                dispatch(setVotingTurn(numOfPlayers))
                            
                            }}/>
                            <CopOutButton 
                                title="cop out"
                                style={styles.button}
                                onPress={() => {
                                setCopOut(copOut + 1)
                                dispatch(minusScore(performingPlayer))
                                dispatch(setVotingTurn(numOfPlayers))
                            }}/>
                        </View>
                    </>
                    : <Text> </Text> }
                    { endOfVoting && !winner ? 
                    <View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{performingPlayerName} voting results:</Text>
                            { coppedOut ?
                            <View style={styles.copoutContainer}>
                            <Text style={styles.copoutTitle}>cop out!</Text>
                            <Text style={styles.copoutText}>give them feedback on how they could have shown up more authentically</Text> 
                        </View> 
                        :
                        <Text>  </Text> }
                            { withItt ?
                        <View style={styles.copoutContainer}>
                            <Text style={styles.copoutTitle}>with it!</Text>
                        </View> :
                            <Text>  </Text> }
                        <View style={styles.scoresContainer}>
                            <Text style={styles.subtitle}>with it: {withIt} </Text>
                            <Text style={styles.subtitle}>cop out: {copOut} </Text>
                        </View>
                        </View>
                        <View style={styles.scoreboardContainer}>
                        <View style={styles.scoreboard}>
                            <Scoreboard players={playerScores}/>
                        </View>
                        </View>

                        <View style={[styles.buttonContainer, styles.nextButton]}>
                            <Button 
                                title="next player >"
                                onPress={() => {
                                dispatch(setPerformingTurn(numOfPlayers))
                                navigation.navigate(ScreenNames.PerformPrompt)
                                // dispatch(resetVoter())
                                dispatch(setVotingTurn(numOfPlayers))
                                dispatch(setVotingTurn(numOfPlayers))
                
                            }}/>
                        </View>
                    </View> : <Text> </Text>}


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
