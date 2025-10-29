import {View, StyleSheet, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import Testimonials from './testimonials';
import BannerCarousal from './bannerCarousal';
import SubscriptionsSlider from './subscriptionsSlider';
import SuccessStories from './successStories';

export default function Home() {
  const count = useSelector(state => state.counter.value);
  const {themeMode, theme} = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      paddingBottom: 10,
    },
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

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BannerCarousal />
          <SubscriptionsSlider />
          <Testimonials />
          <SuccessStories />
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}
