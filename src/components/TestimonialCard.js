import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import StarRating from './StarRating';
import {constant} from '../constants';

export default function TestimonialCard({
  name,
  profilePic,
  rating,
  testimonial,
}) {
  const {themeMode, theme} = useSelector(state => state.theme);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.cardContainerBackgroundColor,
      borderRadius: 12, // rounded corners
      padding: 10, // inner spacing
      marginRight: 10,
      height: 150,
      width: 300,
      justifyContent: 'center',

      // Shadow for iOS
      shadowColor: theme.shadowColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,

      // Elevation for Android
      elevation: 1,
      overflow: 'visible',
    },
    innerContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 30,
      height: 30,
      borderRadius: 20,
      marginRight: 10,
    },
    nameText: {
      fontSize: 15,
      fontFamily: constant.fonts.NunitoSansBold,
      color: theme.textColor,
      flexShrink: 1,
    },
    testimonial: {
      color: theme.textColor,
      fontSize: 14,
      flex: 3,
      paddingTop: 8,
      flexShrink: 1,
      maxHeight: 80,
      width: 200,
      fontFamily: constant.fonts.NunitoSansRegular,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={profilePic} style={styles.image}></Image>
        <Text style={styles.nameText} ellipsisMode="tail" numberOfLines={1}>
          {name}
        </Text>
      </View>
      <StarRating style={styles.starRating} rating={rating} />
      <Text style={styles.testimonial} numberOfLines={4} ellipsizeMode="tail">
        {testimonial}
      </Text>
    </View>
  );
}
