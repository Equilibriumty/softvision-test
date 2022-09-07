import { FlatList, Image, ScrollView, View } from "react-native";
import React from "react";
import Category from "./Category";
import { globalStyles } from "../styles/styles";
import { categoriesData } from "../data/CategoriesData";

export default function CategoryCarousel() {
  const renderItem = ({ item }) => (
    <Category icon={item.icon} isActive={item.isActive} title={item.title} />
  );
  return (
    <View>
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
