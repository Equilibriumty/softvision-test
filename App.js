import { SafeAreaView, StatusBar } from 'react-native';
import RootStackScreens from './screens/RootStackScreens';
import { globalStyles } from './styles/styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('./assets/Lato-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={globalStyles.androidSafeArea}
      onLayout={onLayoutRootView}
    >
      <StatusBar backgroundColor={globalStyles.primaryColor.backgroundColor} />
      <RootStackScreens />
    </SafeAreaView>
  );
}
