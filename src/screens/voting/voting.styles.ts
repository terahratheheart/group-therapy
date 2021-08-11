import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
    titleContainer:{
        alignItems: "center",
    },

    scoresContainer:{
        marginTop: 5,
        marginBottom: 20

    },

    buttonContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    nextButton: {
        marginTop:70,
        marginRight: 20,
        justifyContent: "flex-end"
    },
    button: {
        marginBottom: 20,
        width: 250,
        height: 200,

    },

    withItButton: {
        backgroundColor: "#ffffff",
        color: "#000000"
    },

    title: {
        color: "#ffffff",
        fontSize: 30,
        paddingBottom: 20,
        fontWeight: "bold",
        textAlign: "center",
        
    },

    subtitle: {
        color: "#ffffff",
        fontSize: 40,
    },

    copoutText: {
        color: "#000000",
        fontSize: 18,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        textAlign: "center"
    },

    copoutTitle: {
        color: "#000000",
        fontSize: 27,
        marginTop: 5,
        marginBottom: 5,
        // backgroundColor: "#ffffff",
    },

    copoutContainer:{
        alignItems: "center",
        backgroundColor: "#ffffff",
        marginBottom: 20,
        width: 275
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
