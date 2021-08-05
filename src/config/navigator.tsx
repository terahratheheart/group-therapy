import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, PerformPrompt, Instructions, EnterPlayers, Voting} from "@screens";
import Scores from "../screens/scoreboard/scores";

export type StackNavigatorParams = {
    Home: undefined;
    PerformPrompt: undefined;
    Instructions: undefined;
    EnterPlayers: undefined;
    Voting: undefined;
    Scores: undefined
};

export enum ScreenNames {
    Home = "Home",
    PerformPrompt = "PerformPrompt",
    Instructions = "Instructions",
    EnterPlayers = "EnterPlayers",
    Voting = "Voting",
    Scores = "Scores"}


const Stack = createStackNavigator<StackNavigatorParams>();

export default function Navigator(): ReactElement {
    
    return (
            <Stack.Navigator headerMode="none">
                <Stack.Screen name={ScreenNames.Home} component={Home} />  
                <Stack.Screen name={ScreenNames.EnterPlayers} component={EnterPlayers} />
                <Stack.Screen name={ScreenNames.PerformPrompt} component={PerformPrompt} />
                <Stack.Screen name={ScreenNames.Voting} component={Voting} />
                <Stack.Screen name={ScreenNames.Scores} component={Scores} />
                <Stack.Screen name={ScreenNames.Instructions} component={Instructions} />
            </Stack.Navigator>

    );
}
