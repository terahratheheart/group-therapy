import React, { ReactElement } from "react";
import { AppBootstrap } from "@Components";
import Navigator from "@config/navigator";
import DrawerNavigator from "./config/drawer";
import { Provider } from "react-redux";
import store from "./redux/store";

import { NavigationContainer } from "@react-navigation/native";

export default function App() : ReactElement{
    return (
        <AppBootstrap>
            <Provider store={store}>
            <NavigationContainer>
                <DrawerNavigator></DrawerNavigator>
            </NavigationContainer>
            </Provider>
        </AppBootstrap>
    );
}
