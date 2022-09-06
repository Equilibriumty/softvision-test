import { View, Text } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/styles';
import CategoryCarousel from '../components/CategoryCarousel';
import Sports from '../components/Sports';

export default function JoinGame() {
  return (
    <View style={globalStyles.joinGameScreen}>
      <CategoryCarousel />
      <Sports />
    </View>
  );
}
