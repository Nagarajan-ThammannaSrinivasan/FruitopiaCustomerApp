import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import TestimonialCard from './TestimonialCard';
import testTestimonials from '../data/testTestimonials';
import {constant} from '../constants';

export default function Testimonials() {
  const {themeMode, theme} = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const testimonialRenderItem = ({item}) => (
    <TestimonialCard
      name={item.name}
      profilePic={item.profilePic}
      rating={item.rating}
      testimonial={item.testimonial}
    />
  );
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 30,
      marginHorizontal: 5,
      padding: 5,
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: constant.fonts.NunitoSansBold,
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
      <Text style={styles.sectionTitle}>{t('testimonials.sectionTitle')}</Text>
      <FlatList
        data={testTestimonials}
        keyExtractor={item => item.id.toString()}
        renderItem={testimonialRenderItem}
        horizontal
        snapToInterval={300 + 10}
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
      />
    </View>
  );
}
