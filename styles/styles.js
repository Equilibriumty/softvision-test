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
});
