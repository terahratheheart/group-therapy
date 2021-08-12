import React, { ReactElement } from "react";
import { View, ScrollView} from "react-native";
import styles from "./instructions.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScreenNames, StackNavigatorParams } from "@config/navigator";
import { GradientBackground, DrawerHeader, Button } from "@Components";
import {Text} from "@Components"
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerActions } from "@react-navigation/native";
import {useAppDispatch } from "../../redux/hooks";
import { resetGame } from "../../redux/actions";
// import { openDrawer } from "../../utils/helper-function"
// import { endGame } from "../../utils/helper-function"

type InstructionsProps = {
    navigation: StackNavigationProp<StackNavigatorParams, "Instructions">;
};

export default function Instructions({ navigation }: InstructionsProps): ReactElement {
    
//------------------------redux variables----------------------- 
    const dispatch = useAppDispatch()
//-------------------helper functions----------------------------
    function openDrawer(): any {
        navigation.dispatch(DrawerActions.openDrawer())
    }
    function endGame(): any{
        dispatch(resetGame())
        navigation.navigate(ScreenNames.Home)
    }

    return (
        <GradientBackground>
            <DrawerHeader drawerOpenCallback={openDrawer} endGameCallback={endGame} />
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>

                        <View style={styles.headerContainer}>
                            <Text style={styles.header}>group therapy</Text>
                        </View>

                        <View style={styles.bodyContainer}>
                            <Text style={styles.body}>is it really a game?</Text>
                            <Text style={styles.body}>yes.</Text>
                            <Text style={styles.body}>but group therapy is for people who want to do more than just play games. for people who want to open up. get in touch... feel free.</Text>
                        </View>

                        <View style={styles.rulesContainer}>
                            <Text style={styles.body}>• there are therapy prompts that each player will perform and be judged on their performance authenticity by the group.</Text>
                            <Text style={styles.body}> • each player starts “hung up” and hopes to become “free” – each player will receive their prompt and read it aloud, they then have no more than one minute to prepare before performing the instruction.</Text>
                            <Text style={styles.body}>•	if the player does not choose to do the prompt, they will lose one point and the next player will go.</Text>
                            <Text style={styles.body}>•	after performed, each member of the group will anonymously vote whether or not the performance was “with it” or if  it was a “cop out”. (see judgment below)</Text>
                            <Text style={styles.body}>•	the player will get a point for every “with it” and will lose a point for every “cop out”.</Text>
                            <Text style={styles.body}>•	if more than half of the judgments are “cop outs” the performing player may ask the group for feedback on how they might be more authentic.</Text>
                            <Text style={styles.body}>•	the first person to become “free” is the winner.</Text>
                        </View>

                        <View style={styles.headerContainer}>
                            <Text style={styles.header}>judgement</Text>
                        </View>

                        <View style={styles.bodyContainer}>
                            <Text style={styles.body}>after the performance round, each player will vote whether or not the performing player's performance was "with it" or if it was a "cop out". when a player must do or say something one-at-a-time w other players, judgements will be made only after the player has completed the whole assignment and will be based on yr overall impression of everything done and said.</Text> 
                            <Text style={styles.body}>after voting, pass the device to the next voting player as denoted. </Text>
                        </View>

                        <View style={styles.headerContainer}>
                            <Text style={styles.header}>did they "cop out"?</Text>
                        </View>

                        <View style={styles.bodyContainer}>
                            <Text style={styles.body}>were they acting? were they impersonal? were they glib? did they try to make a joke of what they were doing? were they trying to sustain a public image of themselves which seems different than their private self? did they respond to the instruction incompletely, trying to get by with as little as possible? were they trying to hide something? did they seem afraid of appearing petty, ordinary, naive, weak, uncool? were they afraid to be vulnerable?</Text>
                        </View>

                        <View style={styles.headerContainer}>
                            <Text style={styles.header}>were they "with it"?</Text>
                        </View>

                        <View style={styles.bodyContainer}>
                            <Text style={styles.body}>did they try to be honest, open, sincere, aware, giving: free?</Text>
                            <Text style={styles.body}>many judgements will be difficult to make. how well you know the player, of course, will affect yr decision. at times, you may waver; but - as in most personal situations - judging is a risk you must take.</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button style={styles.button}title="< go back" onPress={() => navigation.goBack()} />
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </GradientBackground>
    );
}
