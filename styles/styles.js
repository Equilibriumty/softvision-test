import { Platform, StatusBar, StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  primaryColor: {
    backgroundColor: '#042F59',
  },
  androidSafeArea: {
    flex: 1,
    backgroundColor: '#042F59',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  joinGameScreen: {
    height: '100%',
    backgroundColor: '#031E3C',
  },
  carousel: {
    marginTop: 9,
    height: 90,
  },
  activeCategory: {
    height: 65,
    width: 80,
    backgroundColor: '#23CFF2',
    marginLeft: 13,
    marginRight: 5,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultCategory: {
    height: 60,
    width: 72,
    marginRight: 10,
    borderRadius: 4,
    justifyContent: 'center',
    borderColor: '#1F4773',
    borderWidth: 1,
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 11,
    fontFamily: 'Lato-Regular',
    color: '#FFFFFF',
  },
  sportsCard: {
    width: '92%',
    height: 75,
    backgroundColor: '#FFFFFF',
    marginLeft: 13,
    marginBottom: 13,
    borderRadius: 5,
  },
  sportsCardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  sportsCardDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
});
