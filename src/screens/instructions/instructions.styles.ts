import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headerContainer: {
        alignItems:"center",
        marginBottom: 20,
        marginTop: 20,
    },

    header:{
        color: "#ffffff",
        fontSize: 30,
    },
    bodyContainer:{
        width: 350,
        marginLeft: 20,
        marginBottom: 10,
    },

    body: {
        color: "#ffffff",
        fontSize: 20,
    },

    rulesContainer: {
        width: 340,
        marginLeft: 20
    },

    buttonContainer:{
        alignItems: "center"
    },
    
    button: {
        marginTop: 30,
        marginBottom: 100,
        width: 250,
    }
});

export default styles;
