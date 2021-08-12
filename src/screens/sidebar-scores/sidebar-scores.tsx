import React, { ReactElement, useState } from "react";
import { View, ScrollView} from "react-native";
import styles from "./sidebar-scores.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { DrawerHeader, GradientBackground, Scoreboard, Text } from "@Components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ScreenNames } from "@config/navigator"
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerActions } from "@react-navigation/native";
import { resetGame } from "../../redux/actions";
// import { openDrawer } from "../../utils/helper-function"
// import { endGame } from "../../utils/helper-function"

type ScoresProps = {
    navigation: StackNavigationProp<StackNavigatorParams, ScreenNames.Scores>;
};

export default function SideBarScores({ navigation }: ScoresProps): ReactElement {
//-------------------global variable----------------
    const playerScores = useAppSelector(state=> state.scores)
//-------------------redux action----------------------
    const dispatch = useAppDispatch()
//-------------------helper functions------------------
    function openDrawer(): any {
        navigation.dispatch(DrawerActions.openDrawer())
    }

    function endGame(): any{
        dispatch(resetGame())
        navigation.navigate(ScreenNames.Home)
    }
//-----------------------------------------------------------------------------------
    return (
        <GradientBackground>            
            <DrawerHeader drawerOpenCallback={openDrawer} endGameCallback={endGame}/>
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
                
                </ScrollView>
            </SafeAreaView>
        </GradientBackground>
    );
}
