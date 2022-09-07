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
      <Tab.Navigator shifting={false} barStyle={globalStyles.primaryColor}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => <MemoHomeIcon isFocused={focused} />,
          }}
        />
        <Tab.Screen
          name="Join Game"
          component={JoinGame}
          options={{
            tabBarIcon: ({ focused }) => <MemoJoinIcon isFocused={focused} />,
          }}
        />
        <Tab.Screen
          name="Create Game"
          component={CreateGame}
          options={{
            tabBarIcon: ({ focused }) => <MemoCreateIcon isFocused={focused} />,
          }}
        />
        <Tab.Screen
          name="My Games"
          component={MyGames}
          options={{
            tabBarIcon: ({ focused }) => (
              <MemoMyGamesIcon isFocused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarIcon: ({ focused }) => <MemoDotsIcon isFocused={focused} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
