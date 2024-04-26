import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Matchs from '../pages/Matchs';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}