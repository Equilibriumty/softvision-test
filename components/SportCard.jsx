import { View, Text } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/styles';
import SvgWrapper from './SvgWrapper';

export default function SportCard({ icon, title, date }) {
  return (
    <View style={globalStyles.sportsCard}>
      {icon}

      {/* <SvgWrapper
        d={
          'M4 0C1.79375 0 0 1.79375 0 4C0 6.20625 1.79375 8 4 8C6.20625 8 8 6.20625 8 4C8 1.79375 6.20625 0 4 0ZM5.90312 6.06875C5.8375 6.13438 5.75313 6.16719 5.66719 6.16719C5.58125 6.16719 5.49688 6.13438 5.43125 6.06875L3.76406 4.40312C3.70156 4.34062 3.66719 4.25625 3.66719 4.16719V2C3.66719 1.81562 3.81719 1.66719 4 1.66719C4.18281 1.66719 4.33281 1.81562 4.33281 2V4.02812L5.90156 5.59688C6.03281 5.72813 6.03281 5.93906 5.90312 6.06875Z'
        }
        fill='#ABBBCB'
      /> */}

      {/* TODO FIX ISSUE WIT SVG  */}

      <Text style={globalStyles.sportsCardTitle}>{date}</Text>
      <Text style={globalStyles.sportsCardDate}>{title}</Text>
    </View>
  );
}
