import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {constant} from '../constants';

export default function BannerCard({img, title, description, price}) {
  const {themeMode, theme} = useSelector(state => state.theme);
  const styles = StyleSheet.create({
    bannerContainer: {
      backgroundColor: theme.cardContainerBackgroundColor,
      borderRadius: 12, // rounded corners
      padding: 8, // inner spacing
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '95%',
      marginHorizontal: 12,

      // Shadow for iOS
      shadowColor: theme.shadowColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,

      // Elevation for Android
      elevation: 8,
      overflow: 'hidden',
    },
    image: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '98%',
      width: '98%',
      resizeMode: 'cover',
    },
  });
  return (
    <View style={styles.bannerContainer}>
      <Image source={img} style={styles.image} />
    </View>
  );
}
