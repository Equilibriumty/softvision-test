import { View, Text } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function Category({ icon, title, isActive }) {
  const categoryStyle = isActive
    ? globalStyles.activeCategory
    : globalStyles.defaultCategory;
  return (
    <LinearGradient
      colors={['#052140', '#0C3461']}
      end={{ x: 0.5, y: -0.5 }}
      style={categoryStyle}
    >
      <Text style={globalStyles.categoryTitle}>{title}</Text>
      <View>{icon}</View>
    </LinearGradient>
  );
}
