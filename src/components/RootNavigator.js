import DrawerNavigator from './DrawerNavigator';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import ThemeInitializer from './ThemeInitializer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppStatusBar from './AppStatusBar';
import {useSelector} from 'react-redux';
import React, {useCallback} from 'react';
import BootSplash from 'react-native-bootsplash';

export default function RootNavigator() {
  const onNavigationReady = useCallback(async () => {
    // console.log('✅ Navigation ready at', Date.now());
    await BootSplash.hide({fade: true});
    // console.log('BootSplash hidden after navigation ready');
  }, []);

  const {themeMode, theme} = useSelector(state => state.theme);

  return (
    <ThemeInitializer>
      <AppStatusBar />
      <NavigationContainer onReady={onNavigationReady} theme={DefaultTheme}>
        <DrawerNavigator />
      </NavigationContainer>
    </ThemeInitializer>
  );
}
