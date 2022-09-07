import { View, FlatList, Image } from "react-native";
import React from "react";
import SportCard from "./SportCard";
import { MemoRoseIcon } from "./icons/RoseIcon";
import { MemoLionIcon } from "./icons/LionIcon";
import { MemoPgaIcon } from "./icons/PgaIcon";

export default function Sports() {
  const sportsData = [
    {
      id: 1,
      title: "6 Nations Predictor",
      date: "Wed 3d, Sep 19:45",
      icon: <MemoRoseIcon />,
    },
    {
      id: 2,
      title: "PL Score Predictor",
      date: "Wed 3d, Sep 19:45",
      icon: <MemoLionIcon />,
    },
    {
      id: 3,
      title: "PGA Championships \nFantasy Golf",
      date: "Wed 3d, Sep 19:45",
      icon: <MemoPgaIcon />,
    },
    {
      id: 4,
      title: "6 Nations Predictor",
      date: "Wed 3d, Sep 19:45",
      icon: <MemoRoseIcon />,
    },
  ];

  const renderItem = ({ item }) => (
    <SportCard date={item.date} icon={item.icon} title={item.title} />
  );
  // TODO FIX ALIGNMENT OF ELEMENTS INSIDE THE FLATLIST
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
