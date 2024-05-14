import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { colors } from './src/constants/colors';
import Routes from './src/routes';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ProfileProvider } from './src/contexts/profile';
import { NotificationProvider } from './src/contexts/notification';
import { ToastSheetProvider } from './src/contexts/toastSheet';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Sora-Regular': require('./src/assets/fonts/Sora-Regular.ttf'),
    'Sora-SemiBold': require('./src/assets/fonts/Sora-SemiBold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
      }}
      onLayout={onLayoutRootView}
    >
      <NotificationProvider>
        <ToastSheetProvider>
          <ProfileProvider>
            <Routes />
          </ProfileProvider>
        </ToastSheetProvider>
      </NotificationProvider>
      <StatusBar style="light" />
    </View>
  );
}
