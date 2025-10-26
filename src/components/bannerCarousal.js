import * as React from 'react';
import {View, FlatList, useWindowDimensions, StyleSheet} from 'react-native';
import {useRef, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import BannerCard from './bannerCard';
import testData from '../data/testData';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';

export default function BannerCarousal() {
  const {themeMode, theme} = useSelector(state => state.theme);
  const {height, width} = useWindowDimensions();
  const dispatch = useDispatch();
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const ref = useRef(null);
  const progress = useSharedValue(0);

  const onPressPagination = index => {
    ref.current?.scrollTo({index, animated: true});
  };

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      height: 150,
      marginTop: 5,
    },
  });
  const bannerRenderItem = ({item}) => (
    <BannerCard
      img={item.img}
      title={item.title}
      description={item.description}
      price={item.price}
    />
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        autoPlayInterval={2000}
        autoPlay={true}
        data={testData}
        height="90%"
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        width={width}
        style={{
          width: width,
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 60,
        }}
        onProgressChange={progress}
        renderItem={bannerRenderItem}
      />
      <View
        style={{
          position: 'absolute',
          bottom: -15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pagination.Basic
          progress={progress}
          data={testData}
          activeDotStyle={{
            backgroundColor: theme.activeDotColor,
            borderRadius: 50,
            width: 10, // bigger
            height: 10,
            borderWidth: 0,
          }}
          dotStyle={{
            backgroundColor: theme.cardPaginationDotColor,
            borderRadius: 50,
            width: 10, // bigger
            height: 10,
            borderWidth: 0,
            borderColor: theme.cardPaginationDotColor,
          }}
          containerStyle={{gap: 20, marginTop: 10, paddingVertical: 4}}
          onPress={onPressPagination}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
        />
      </View>
    </View>
  );
}
