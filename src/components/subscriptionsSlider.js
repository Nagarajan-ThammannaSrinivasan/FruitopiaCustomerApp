import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import testSubscriptions from '../data/testSubscriptions';
import SubscriptionsSliderCard from './subscriptionsSliderCard';

export default function SubscriptionsSlider() {
  const {themeMode, theme} = useSelector(state => state.theme);
  const {height, width} = useWindowDimensions();
  const dispatch = useDispatch();
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const subscriptionsRenderItem = ({item}) => (
    <SubscriptionsSliderCard planName={item.planName} planPic={item.planPic} />
  );

  const styles = StyleSheet.create({
    container: {
      height: 150,
      marginTop: 30,
      marginHorizontal: 5,
      padding: 5,
      // backgroundColor: 'red',
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingRight: 5,
      paddingBottom: 5,
      paddingTop: 5,
      alignSelf: 'flex-start',
      color: theme.sectionHeaderColor,
      flexShrink: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{t('subscriptions')}</Text>
      <FlatList
        data={testSubscriptions}
        keyExtractor={item => item.id.toString()}
        renderItem={subscriptionsRenderItem}
        horizontal
        snapToInterval={width - 10}
        pagingEnabled={false}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
