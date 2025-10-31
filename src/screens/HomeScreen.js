import {View, StyleSheet, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import Testimonials from '../components/Testimonials';
import BannerCarousal from '../components/BannerCarousal';
import SubscriptionsSlider from '../components/SubscriptionsSlider';
import SuccessStories from '../components/SuccessStories';
import {constant} from '../constants';

export default function HomeScreen() {
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
