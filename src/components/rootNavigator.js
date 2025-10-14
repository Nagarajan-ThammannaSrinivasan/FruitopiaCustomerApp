import DrawerNavigator from './drawerNavigator';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import ThemeInitializer from './themeInitializer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppStatusBar from './appStatusBar';
import {useSelector} from 'react-redux';

export default function RootNavigator() {
  const {themeMode, theme} = useSelector(state => state.theme);

  return (
    <SafeAreaProvider>
      <ThemeInitializer>
        <AppStatusBar />
        <NavigationContainer
          theme={themeMode === 'dark' ? DarkTheme : DefaultTheme}>
          <DrawerNavigator />
        </NavigationContainer>
      </ThemeInitializer>
    </SafeAreaProvider>
  );
}
