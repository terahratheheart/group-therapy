import React, { Component, ReactElement } from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./instructions.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { GradientBackground, Button, DrawerHeader } from "@Components";
import {Text} from "@Components"
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerActions } from "@react-navigation/native";

type InstructionsProps = {
    navigation: StackNavigationProp<StackNavigatorParams, "Instructions">;
};

export default function Instructions({ navigation }: InstructionsProps): ReactElement {
    function openDrawer(): any {
        navigation.dispatch(DrawerActions.openDrawer())
    }
    
    return (
        <GradientBackground>
            <SafeAreaView>
            <DrawerHeader callbackFunction={openDrawer}/>
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                <Text style={styles.header}>group therapy</Text>
                <Text style={styles.body}> yes.</Text>
                <Text style={styles.body}>but group therapy is for people who want to do more than just play games. for people who want to open up. get in touch. feel free.</Text>
                <Text style={styles.body}>
                    •	there are therapy prompts that each player will perform and be judged on their performance authenticity by the group.</Text>
                    <Text style={styles.body}> •	each player starts “hung up” and hopes to become “free” – the first player will receive their prompt and read it aloud, they then have no more than one minute to prepare before performing the instruction.</Text>
                    <Text style={styles.body}>•	if the player does not choose to do the prompt, they will lose one point and the next player will go.</Text>
                    <Text style={styles.body}>•	after performed, each member of the group will anonymously vote whether or not the performance was “with it” or if  it was a “cop out”. (see judgment)</Text>
                    <Text style={styles.body}>•	the player will get a point for every “with it” and will lose a point for every “cop out”.</Text>
                    <Text style={styles.body}>•	if more than half of the judgments are “cop outs” the performing player may ask the group for feedback and afterwards will have the opportunity to perform the prompt again and new judgments will be made. a player may only repeat a prompt once.</Text>
                    <Text style={styles.body}>•	the first person to become “free” is the winner.</Text>
                </View>
            </ScrollView>
            </SafeAreaView>
        </GradientBackground>
    );
}
