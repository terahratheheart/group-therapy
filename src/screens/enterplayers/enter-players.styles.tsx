import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonContainer: {
        // flex: 2,
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 20
    },
    title: {
        color:"#ffffff",
        fontSize: 25,
        marginTop: 50,
        marginLeft: 10
    
    },

    inputContainer: {
        alignItems: "center"
    },

    input: {
        backgroundColor: "#ffffff",
        width: 300,
        height: 30,
        marginTop: 20,
        marginBottom: 10,
        alignItems: "center"
    },
    players: {
        color:"#ffffff"
    },

    button: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        width: 170,
        height: 60,
        alignContent: "center"

    },
    errormsg:{
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: "gray",
        padding: 10
    },

    errormsgContainer: {
        flex: 1
    },


});

export default styles;
