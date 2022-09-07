import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/styles";
import { MemoClockIcon } from "./icons/ClockIcon";

export default function SportCard({ icon, title, date }) {
  return (
    <View style={globalStyles.sportsCard}>
      <View style={globalStyles.sportsCardWrapper}>
        {icon}

        <View style={globalStyles.sportsCardInfo}>
          <View style={globalStyles.sportsCardTitleWrapper}>
            <MemoClockIcon />
            <Text style={globalStyles.sportsCardTitle}>{date}</Text>
          </View>
          <Text style={globalStyles.sportsCardDate}>{title}</Text>
        </View>
      </View>
    </View>
  );
}
