import React from "react";

import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";

import { Instructions, SidebarScores} from "@screens";
import { ScreenNames } from "./navigator";
import Navigator from "./navigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
    <Drawer.Navigator screenOptions={{
        headerShown: false}}>
        <Drawer.Screen name="session" component={Navigator} />
        <Drawer.Screen name="instructions" component={Instructions} />
        <Drawer.Screen name="score" component={SidebarScores} />
    </Drawer.Navigator>
    );
}

export default DrawerNavigator;