import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { initialState } from '../default/state';

const Drawer = createDrawerNavigator();

export const DarwerStack = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Новости">
                {initialState.map(item => <Drawer.Screen />)}
            </Drawer.Navigator>
        </NavigationContainer>
    )
}