import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, New_Inventory, Edit_Inventory } from "../screen/index";

const { Navigator, Screen } = createStackNavigator();

const AppStack: FC = () => {

    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
                <Screen name="home" component={Home} />
                <Screen name="New_Inventory" component={New_Inventory} />
                <Screen name="Edit_Inventory" component={Edit_Inventory} />
            </Navigator>
        </NavigationContainer>
    )
};

export default AppStack;