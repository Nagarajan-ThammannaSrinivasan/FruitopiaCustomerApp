import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {constant} from '../constants';

export default function SuccessStoryCard({storyPic, storyHeader, storyDetail}) {
  const {height, width} = useWindowDimensions();
  const {themeMode, theme} = useSelector(state => state.theme);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.cardContainerBackgroundColor,
      borderRadius: 12, // rounded corners
      padding: 10, // inner spacing
      marginVertical: 6,
      height: 60,
      width: width - 20,

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
      width: 40,
      height: 40,
      borderRadius: 50,
      justifyContent: 'center',
    },
    storyTitle: {
      fontSize: 15,
      fontFamily: constant.fonts.NunitoSansRegular,
      color: theme.textColor,
      paddingStart: 10,
      flexShrink: 1,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={storyPic} style={styles.image}></Image>
        <Text style={styles.storyTitle} ellipsizeMode="tail" numberOfLines={1}>
          {storyHeader}
        </Text>
      </View>
    </View>
  );
}
