import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toggleTheme} from '../slices/themeSlice';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';

export default function Home() {
  const count = useSelector(state => state.counter.value);
  const {themeMode, theme} = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: theme.buttonBackgroundColor},
          ]}
          onPress={() => {
            dispatch(toggleTheme());
          }}>
          <Text style={[styles.buttonText, {color: theme.primaryTextColor}]}>
            {t('changeTheme')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: theme.buttonBackgroundColor},
          ]}
          onPress={() => {
            i18n.language === 'ta'
              ? i18n.changeLanguage('en')
              : i18n.changeLanguage('ta');
          }}>
          <Text style={[styles.buttonText, {color: theme.primaryTextColor}]}>
            {t('changeLanguage')}
          </Text>
        </TouchableOpacity>

        <Text style={[styles.text, {color: theme.primaryTextColor}]}>
          {t('welcome')}
        </Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 6,
    borderRadius: 6,
    marginVertical: 6,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white', // or from theme
    textTransform: 'none', // preserves original casing
  },
  text: {
    fontSize: 16,
  },
});
