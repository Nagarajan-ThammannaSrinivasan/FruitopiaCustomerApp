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

export default function SubscriptionsSliderCard({planName, planPic}) {
  const {height, width} = useWindowDimensions();
  const {themeMode, theme} = useSelector(state => state.theme);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.cardContainerBackgroundColor,
      borderRadius: 12, // rounded corners
      padding: 10, // inner spacing
      justifyContent: 'center',
      marginRight: 10,
      // Shadow for iOS
      shadowColor: theme.shadowColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,

      // Elevation for Android
      elevation: 1,
      overflow: 'visible',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 50,
      justifyContent: 'center',
    },
    nameText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: theme.textColor,
      flexShrink: 1,
      textAlign: 'center',
      paddingTop: 5,
    },
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={planPic} style={styles.image}></Image>
        <Text style={styles.nameText} ellipsisMode="tail" numberOfLines={1}>
          {planName}
        </Text>
      </View>
    </View>
  );
}
