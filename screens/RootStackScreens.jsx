import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './Home';
import JoinGame from './JoinGame';
import CreateGame from './CreateGame';
import MyGames from './MyGames';
import More from './More';
import { globalStyles } from '../styles/styles';

export default function RootStackScreens() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={globalStyles.primaryColor}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Join Game' component={JoinGame} />
        <Tab.Screen name='Create Game' component={CreateGame} />
        <Tab.Screen name='My Games' component={MyGames} />
        <Tab.Screen name='More' component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
