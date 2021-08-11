import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    titleContainer:{
        alignItems:"center"
    },

    header: {
        color:"#ffffff",
        fontSize: 50,
        marginTop: 50,
        textAlign: "center"
    },
    cardContainer: {
        alignItems:"center",
        marginTop: 15,
        marginBottom: 15


    },
    card: {
        backgroundColor:"#ffffff",
        height: 150,
        width: 300,
        justifyContent: "center"

    },
    
    cardText: {
        color: "#000000",
        textAlign: "center",
        marginRight: 10,
        marginLeft: 10,
        fontSize: 18,
    },

    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 20
    },

    button: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        width: 170,
        height: 60,
        alignContent: "center"

    },

    completeButton:{
        marginTop: 70,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        width: 200,
        height: 60,
        alignContent: "center",
        justifyContent: "flex-end"
    },

    completeButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20
    },

    clockContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20
    },

    clockText:{
        textAlign:"center"
    }


});

export default styles;
