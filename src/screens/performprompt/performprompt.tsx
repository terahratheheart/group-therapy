import React, { ReactElement, useState } from "react";
import { SafeAreaView, Animated, View, TouchableOpacity } from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { Button, DrawerHeader, GradientBackground } from "@Components";
import styles from "./peformprompt.styles";
import prompts from "../../prompts.json"
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams, ScreenNames} from "@config/navigator";
import { addCardId, minusScore, resetGame } from "../../redux/actions";
import { Text } from "@Components"
import { DrawerActions } from "@react-navigation/native";
import { Audio } from 'expo-av';
// import { openDrawer } from "../../utils/helper-function"
// import { endGame } from "../../utils/helper-function"

type PerformPromptProps = {
    navigation: StackNavigationProp<StackNavigatorParams, ScreenNames.PerformPrompt>;
};

export default function PerformPrompt({navigation}: PerformPromptProps): ReactElement {

// ------------------global states-----------------
    const players = useAppSelector(state => state.players)
    const performingPlayer = useAppSelector(state => state.turn.performingPlayerIndex)
    const cardIds = useAppSelector(state=> state.cardIds)
// ---------------------local states--------------------
    const [isPlaying, setIsPlaying] = useState(false)
    const [clockVisible, setClockIsVisible] = useState(false)
    const [completeButtonVisible, setCompleteButtonVisible] = useState(false)
    const [cardButtonsVisible, setCardButtonsVisible] = useState(false)
    const [cardView, setCardView] = useState("tap for prompt")
    const [cardClickable, setCardClickable] = useState(true)
    const [sound, setSound] = useState();

//-----------------------redux action---------------------
    const dispatch = useAppDispatch()

// ---------helper functions---------------
    function getRandomInt(max: number):number {
        return Math.floor(Math.random() * max);
        }

    function openDrawer(): any {
        navigation.dispatch(DrawerActions.openDrawer())
    }

    function endGame(): any{
        dispatch(resetGame())
        navigation.navigate(ScreenNames.Home)
    }

    function buttonPress(): any {
        setCompleteButtonVisible(false)
        setCardView("tap for prompt")
        setCardClickable(true);
    }
// ---------sound------------------------------
    async function playSound() {
        const { sound }: any = await Audio.Sound.createAsync(
            require('../../../assets/alert.wav')
        );
        setSound(sound);
        await sound.playAsync(); }
    
// ------------ensuring prompt is unique to game------
    let randomNum = getRandomInt(prompts["therapy cards"].length)
    let prompt:any 
    let id:number
    while(cardIds.includes(randomNum)){
        randomNum = getRandomInt(prompts["therapy cards"].length)
    } 
    prompt = prompts["therapy cards"][randomNum] 
//--------------------------------------------------

    return ( 
        <GradientBackground>
            <DrawerHeader drawerOpenCallback={openDrawer} endGameCallback={endGame}/>
            <SafeAreaView style={styles.container}>

                <View style={styles.titleContainer}>
                    <Text style={styles.header}>{players[performingPlayer]}'s turn</Text>
                </View>

                <View style={styles.cardContainer}>
                    <TouchableOpacity style={styles.card}
                        onPress={() => {
                        if(cardClickable){
                            setCardView(prompt.prompt)
                            dispatch(addCardId(prompt.id))}
                        setCardClickable(false)
                        setCardButtonsVisible(true)
                        }}>
                        <Text style={styles.cardText}>{cardView}</Text>
                    </TouchableOpacity>
                </View>
                
                {cardButtonsVisible ? 
                <View style={styles.buttonContainer}>
                    <Button 
                        title="deny" 
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate(ScreenNames.Scores)
                            dispatch(minusScore(performingPlayer))
                            setCardButtonsVisible(false)
                            buttonPress();
                    }}/>
                    <Button 
                        title="accept"
                        style={styles.button}    
                        onPress={() => {
                            setClockIsVisible(true)
                            setIsPlaying(true)
                            setCardButtonsVisible(false)
                        }} />
                </View>
                : <Text>  </Text> }

                <View style={styles.clockContainer}>
                    {clockVisible ?
                    <CountdownCircleTimer
                        isPlaying={isPlaying}
                        duration={2}
                        colors={[
                        ['#000000', 0.4],
                        ['#000000', 0.4],
                        ['#000000', 0.2],
                        ]}
                        onComplete={() => {
                            setCompleteButtonVisible(true)
                            setClockIsVisible(false)
                            playSound()
                            return [false, 0] }}
                        >
                    {   ({ remainingTime}) => (
                            <Animated.Text style={{ color: "#ffffff", fontSize: 18 }}>
                                <Text style={styles.clockText}>prepare for performance</Text>
                            </Animated.Text>
                        )}
                    </CountdownCircleTimer>
                    : <Text>  </Text>}
                </View>

                <View style={styles.completeButtonContainer}>
                {completeButtonVisible ? 
                    <Button 
                        title="prompt complete" 
                        style={styles.completeButton}
                        onPress={() => {
                        navigation.navigate(ScreenNames.Voting)
                        buttonPress()
                        }}/> : <Text>  </Text>}
                </View>

            </SafeAreaView>    
        </GradientBackground>
    );
}
