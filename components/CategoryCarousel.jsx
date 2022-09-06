import { FlatList, Image, ScrollView, View } from 'react-native';
import React from 'react';
import Category from './Category';
import { globalStyles } from '../styles/styles';

const categoriesData = [
  {
    id: 1,
    title: 'All Sports',
    isActive: true,
  },
  {
    id: 2,
    title: 'Football',
    isActive: false,
  },
  {
    id: 3,
    title: 'Rugby Union',
    isActive: false,
  },
  {
    id: 4,
    title: 'Cricket',
    isActive: false,
  },
  {
    id: 5,
    title: 'Golf',
    isActive: false,
  },
];

export default function CategoryCarousel() {
  const renderItem = ({ item }) => (
    <Category icon={item.icon} isActive={item.isActive} title={item.title} />
  );
  return (
    <View style={{ height: 100 }}>
      <ScrollView contentContainerStyle={globalStyles.carousel}>
        <FlatList
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
