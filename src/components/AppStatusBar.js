import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

export default function AppStatusBar() {
  const {themeMode, theme} = useSelector(state => state.theme);
  return (
    <StatusBar
      barStyle={themeMode == 'light' ? 'dark-content' : 'light-content'}
      backgroundColor={theme.primary}
    />
  );
}
