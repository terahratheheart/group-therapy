import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    buttons: {
        marginTop: 80
    },
    button: {
        marginBottom: 20
    },

    title: {
        color: "#ffffff",
        fontSize: 30,
        paddingBottom: 20,
        fontWeight: "bold"
    },

    subtitle: {
        color: "#ffffff"
    },

    scoreboard: {
        borderColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 6,
        alignItems: "center",
        width: 300

    },

    scoreboardContainer: {
        alignItems: "center"
    },

    titleContainer:{
        alignItems: "center"
    },
});

export default styles;
