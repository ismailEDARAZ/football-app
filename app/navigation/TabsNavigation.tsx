import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../pages/Home';
import Matchs from '../pages/Matchs';

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Matchs" component={Matchs} />
    </Tab.Navigator>
  )
}