import React, { ReactElement, useState } from "react";
import { View, ScrollView} from "react-native";
import styles from "./sidebar-scores.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { Button, DrawerHeader, GradientBackground, Scoreboard, Text } from "@Components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ScreenNames } from "@config/navigator"
import { addScore, minusScore, resetVoter, setPerformingTurn, setVotingTurn } from "../../redux/actions";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerActions } from "@react-navigation/native";

type ScoresProps = {
    navigation: StackNavigationProp<StackNavigatorParams, ScreenNames.Scores>;
};

export default function SideBarScores({ navigation }: ScoresProps): ReactElement {

    const playerScores = useAppSelector(state=> state.scores)
    function openDrawer(): any {
        navigation.dispatch(DrawerActions.openDrawer())
    }

    return (
        <GradientBackground>
            <SafeAreaView>
            <DrawerHeader callbackFunction={openDrawer}/>
            <ScrollView contentContainerStyle={styles.container}>
    
                <>
                    <Text style={styles.title}>score</Text>
                    <View style={styles.buttons}>
                    <Scoreboard players={playerScores}/>
                    </View>
                </>
            </ScrollView>
            </SafeAreaView>
        </GradientBackground>
    );
}