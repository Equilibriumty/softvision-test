import { Platform, StatusBar, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  primaryColor: {
    backgroundColor: "#042F59",
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: "#000000",
  },
  androidSafeArea: {
    flex: 1,
    backgroundColor: "#042F59",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  joinGameScreen: {
    height: "100%",
    backgroundColor: "#031E3C",
  },

  carouselView: {
    height: 80,
    marginBottom: 36,
  },
  activeCategory: {
    height: 65,
    width: 80,
    backgroundColor: "#23CFF2",
    marginLeft: 13,
    marginRight: 5,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  defaultCategory: {
    height: 60,
    width: 72,
    marginRight: 10,
    borderRadius: 4,
    justifyContent: "center",
    borderColor: "#1F4773",
    borderWidth: 1,
    alignItems: "center",
  },
  categoryTitle: {
    opacity: 0.7,
    fontSize: 11,
    fontFamily: "Lato-Regular",
    color: "#FFFFFF",
  },
  categoryTitleWithOpacity: {
    opacity: 0.7,
    fontSize: 11,
    fontFamily: "Lato-Regular",
    color: "#FFFFFF",
    opacity: 0.7,
  },
  sportsCard: {
    width: "92%",
    height: 75,
    backgroundColor: "#FFFFFF",
    marginLeft: 13,
    marginBottom: 13,
    borderRadius: 5,
    flexDirection: "row",
  },
  sportsCardTitle: {
    fontFamily: "Poppins-Regular",
    color: "#23476A",
    fontSize: 10,
    marginLeft: 7,
  },
  sportsCardDate: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#2E567D",
  },
  sportsCardInfo: {
    marginLeft: 10,
  },
  sportsCardWrapper: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    alignItems: "center",
  },
  categoryIcon: {
    marginBottom: 8,
  },
  sportsCardTitleWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
