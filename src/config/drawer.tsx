import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Instructions, SidebarScores} from "@screens";
import Navigator, { ScreenNames } from "./navigator";
import { Alert } from "react-native";
import { useAppDispatch } from "../redux/hooks";
import { resetGame } from "../redux/actions";

const Drawer = createDrawerNavigator();


// function CustomDrawerContent(props:any) {

//     const dispatch = useAppDispatch()
//     return (
//         <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
//         <DrawerItem label="end session" onPress={() => Alert.alert(
//         "end session? ",
//         "are you sure you want to end the session?",
//         [
//         {
//             text: "yes",
//             onPress: () => dispatch(resetGame()),
//         },
//         { text: "no", onPress: () => console.log("OK Pressed") }
//         ]
//     )} />
//         </DrawerContentScrollView>
//     );
//     }

const DrawerNavigator = () => {
    return (
    <Drawer.Navigator screenOptions={{
        headerShown: false}}>
        <Drawer.Screen name="resume session" component={Navigator} />
        <Drawer.Screen name="instructions" component={Instructions} />
        <Drawer.Screen name="score" component={SidebarScores} />
    </Drawer.Navigator>
    );
}

export default DrawerNavigator;