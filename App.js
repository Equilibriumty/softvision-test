import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import RootStackScreens from './screens/RootStackScreens';
import { globalStyles } from './styles/styles';
export default function App() {
  return (
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <StatusBar backgroundColor={globalStyles.primaryColor.backgroundColor} />
      <RootStackScreens />
    </SafeAreaView>
  );
}
