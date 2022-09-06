import { View, FlatList, Image } from 'react-native';
import React from 'react';
import SportCard from './SportCard';

export default function Sports() {
  const sportsData = [
    {
      id: 1,
      title: '6 Nations Predictor',
      date: 'Wed 3d, Sep 19:45',
    },
    { id: 2, title: 'PL Score Predictor', date: 'Wed 3d, Sep 19:45' },
    {
      id: 3,
      title: 'PGA Championships Fantasy Golf',
      date: 'Wed 3d, Sep 19:45',
    },
    { id: 4, title: '6 Nations Predictor', date: 'Wed 3d, Sep 19:45' },
  ];

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
