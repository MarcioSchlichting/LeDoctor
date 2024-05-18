import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from "../../screens/AccountScreen";

const Stack = createStackNavigator();
const BottomNavBar = () => {
    return (
        <Stack.Navigator initialRouteName="Account">
            <Stack.Screen name="Account" component={AccountScreen} />
        </Stack.Navigator>
    );
}

export default BottomNavBar;