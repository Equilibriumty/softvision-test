import { FlatList, Image, ScrollView, View } from "react-native";
import React from "react";
import Category from "./Category";
import { globalStyles } from "../styles/styles";
import { MemoSportsIcon } from "./icons/SportsIcon";
import { MemoFootballIcon } from "./icons/FootballIcon";
import { MemoRugbyIcon } from "./icons/RugbyIcon";
import { MemoCricketIcon } from "./icons/CricketIcon";

const categoriesData = [
  {
    id: 1,
    title: "All Sports",
    isActive: true,
    icon: <MemoSportsIcon />,
  },
  {
    id: 2,
    title: "Football",
    isActive: false,
    icon: <MemoFootballIcon />,
  },
  {
    id: 3,
    title: "Rugby Union",
    isActive: false,
    icon: <MemoRugbyIcon />,
  },
  {
    id: 4,
    title: "Cricket",
    isActive: false,
    icon: <MemoCricketIcon />,
  },
  {
    id: 5,
    title: "Golf",
    isActive: false,
    icon: <MemoRugbyIcon />,
  },
];

export default function CategoryCarousel() {
  const renderItem = ({ item }) => (
    <Category icon={item.icon} isActive={item.isActive} title={item.title} />
  );
  return (
    <View style={globalStyles.carouselView}>
      <ScrollView contentContainerStyle={globalStyles.carouselView}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={categoriesData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}
