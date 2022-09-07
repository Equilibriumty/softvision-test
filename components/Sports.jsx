import { View, FlatList, Image } from "react-native";
import React from "react";
import SportCard from "./SportCard";
import { sportsData } from "../data/SportsData";

export default function Sports() {
  const renderItem = ({ item }) => (
    <SportCard date={item.date} icon={item.icon} title={item.title} />
  );
  return (
    <View>
      <FlatList
        data={sportsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
