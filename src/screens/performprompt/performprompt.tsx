import React, { ReactElement, useState } from "react";
import { SafeAreaView, Animated, View, TouchableOpacity } from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { Button, DrawerHeader, GradientBackground } from "@Components";
import styles from "./peformprompt.styles";
import prompts from "../../prompts.json"
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams, ScreenNames} from "@config/navigator";
import { addCardId, minusScore } from "../../redux/actions";
import { Text } from "@Components"
import { DrawerActions } from "@react-navigation/native";

type PerformPromptProps = {
    navigation: StackNavigationProp<StackNavigatorParams, ScreenNames.PerformPrompt>;
};

export default function PerformPrompt({navigation}: PerformPromptProps): ReactElement {


    // ------------------global states-----------------
    const players = useAppSelector(state => state.players)
    const performingPlayer = useAppSelector(state => state.turn.performingPlayerIndex)
    const cardIds = useAppSelector(state=> state.cardIds)
    // --------local states-----------
    const [isPlaying, setIsPlaying] = useState(false)
    const [clockVisible, setClockIsVisible] = useState(false)
    const [completeButtonVisible, setCompleteButtonVisible] = useState(false)
    const [cardButtonsVisible, setCardButtonsVisible] = useState(false)
    const [cardView, setCardView] = useState("")
    const [cardClickable, setCardClickable] = useState(true)

    const dispatch = useAppDispatch()

    // ---------helper functions---------------
    function getRandomInt(max: number):number {
        return Math.floor(Math.random() * max);
        }
    function openDrawer(): any {
        navigation.dispatch(DrawerActions.openDrawer())
    }
    //-----------------------------------------

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
            <SafeAreaView style={styles.container}>
            <DrawerHeader callbackFunction={openDrawer}/>
                <Text style={styles.prompt}>perform prompt {players[performingPlayer]}</Text>
                <TouchableOpacity style={styles.card}
                    onPress={() => {
                    if(cardClickable){
                        setCardView(prompt.prompt)
                        dispatch(addCardId(prompt.id))}
                    setCardClickable(false)
                    setCardButtonsVisible(true)
                    {console.log(cardIds)}
                    }}>
                    <Text style={styles.cardText}>{cardView}</Text>
                </TouchableOpacity>
                

                {cardButtonsVisible ? 
                <>
                <Button title="accept"
                    onPress={() => {
                        setClockIsVisible(true)
                        setIsPlaying(true)
                        setCardButtonsVisible(false)
                    }} />
                <Button title="deny" 
                    onPress={() => {
                        navigation.navigate(ScreenNames.Scores)
                        dispatch(minusScore(performingPlayer))
                        setCompleteButtonVisible(false)
                        setCardView("")
                        setCardButtonsVisible(false);
                }}/>
                <Button title="test" 
                    onPress={() => {
                        navigation.goBack()
            
                }}/>
                </>
                : <Text>  </Text> }

                <View style={styles.container}>
                    {clockVisible ?
                    <CountdownCircleTimer
                        isPlaying={isPlaying}
                        duration={1}
                        colors={[
                        ['#000000', 0.4],
                        ['#000000', 0.4],
                        ['#000000', 0.2],
                        ]}
                        onComplete={() => {
                            setCompleteButtonVisible(true)
                            setClockIsVisible(false)
                            return [false, 0] }}
                        >
                    {   ({ remainingTime}) => (
                            <Animated.Text style={{ color: "#ffffff", fontSize: 40 }}>
                                {remainingTime}
                            </Animated.Text>
                        )}
                    </CountdownCircleTimer>
                    : <Text>  </Text>}
                </View>

                <View>
                {completeButtonVisible ? <Button title="prompt complete" 
                                        onPress={() => {
                                        navigation.navigate(ScreenNames.Voting)
                                        setCompleteButtonVisible(false)
                                        setCardView("")
                                        setCardClickable(true);
                        }}/> : <Text>  </Text>}
                </View>

            </SafeAreaView>    
        </GradientBackground>
    );
}
