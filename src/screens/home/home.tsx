import React, {ReactElement} from "react";
import { View, ScrollView} from "react-native";
import styles from "./home.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { GradientBackground, HomeButton, Text } from "@Components";
import { ScreenNames } from "@config/navigator"
import { SafeAreaView } from "react-native-safe-area-context";

type HomeProps = {
    navigation: StackNavigationProp<StackNavigatorParams, ScreenNames.Home>;
};

export default function Home({ navigation }: HomeProps): ReactElement {

    return (
        <GradientBackground>
            <SafeAreaView>
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.title}>group therapy</Text>
                    <Text style={styles.subtitle}>is it really a game?</Text>

                    <View style={styles.buttons}>
                        <HomeButton
                            onPress={() => {
                                navigation.navigate(ScreenNames.EnterPlayers);
                            }}
                            style={styles.button}
                            title="begin session"
                        />
                        <HomeButton onPress={() => {
                                navigation.navigate(ScreenNames.Instructions);
                            }}style={styles.button} title="how to play" />
                    </View>

                </ScrollView>
            </SafeAreaView>
        </GradientBackground>
    );
}
