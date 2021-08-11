import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },

    button: {
        marginTop: 30,
        marginBottom: 20,
        width: 180
    },

    buttonContainer:{
        alignItems: "center"
    },

    title: {
        color: "#ffffff",
        fontSize: 30,
        paddingBottom: 20,
        fontWeight: "bold"
    },

    titleContainer:{
        alignItems: "center"
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
    }
});

export default styles;
