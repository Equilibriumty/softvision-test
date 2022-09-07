import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./Home";
import JoinGame from "./JoinGame";
import CreateGame from "./CreateGame";
import MyGames from "./MyGames";
import More from "./More";
import { globalStyles } from "../styles/styles";
import { MemoHomeIcon } from "../components/icons/HomeIcon";
import { MemoJoinIcon } from "../components/icons/JoinIcon";
import { MemoCreateIcon } from "../components/icons/CreateIcon";
import { MemoMyGamesIcon } from "../components/icons/MyGamesIcon";
import { MemoDotsIcon } from "../components/icons/DotsIcon";

export default function RootStackScreens() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={globalStyles.primaryColor} shifting={false}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarIcon: () => <MemoHomeIcon /> }}
        />
        <Tab.Screen
          name="Join Game"
          component={JoinGame}
          options={{ tabBarIcon: () => <MemoJoinIcon /> }}
        />
        <Tab.Screen
          name="Create Game"
          component={CreateGame}
          options={{ tabBarIcon: () => <MemoCreateIcon /> }}
        />
        <Tab.Screen
          name="My Games"
          component={MyGames}
          options={{ tabBarIcon: () => <MemoMyGamesIcon /> }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{ tabBarIcon: () => <MemoDotsIcon /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
