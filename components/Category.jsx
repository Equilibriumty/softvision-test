import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/styles";
import { LinearGradient } from "expo-linear-gradient";

export default function Category({ icon, title, isActive }) {
  return (
    <View>
      {isActive ? (
        <View style={globalStyles.activeCategory}>
          <View style={globalStyles.categoryIcon}>{icon}</View>
          <Text style={globalStyles.categoryTitle}>{title}</Text>
        </View>
      ) : (
        <LinearGradient
          colors={["#0C3461", "#052140"]}
          start={{ x: 0, y: -0.5 }}
          end={{ x: 0.5, y: 1 }}
          style={globalStyles.defaultCategory}
        >
          <View style={globalStyles.categoryIcon}>{icon}</View>

          <Text style={globalStyles.categoryTitleWithOpacity}>{title}</Text>
        </LinearGradient>
      )}
    </View>
  );
}
