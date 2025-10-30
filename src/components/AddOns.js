import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import testAddOnsInfo from '../data/testAddOns';
import CustomActivityIndicator from './CustomActivityIndicator';
import AddOnItem from './AddOnItem';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';

export default function AddOns() {
  const {themeMode, theme} = useSelector(state => state.theme);
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const [addOnsInfo, setAddOnsInfo] = useState({});
  useEffect(() => {
    setAddOnsInfo(testAddOnsInfo);
    setLoading(false);
  }, []);

  if (loading) {
    return <CustomActivityIndicator />;
  }

  const addOnRenderItem = ({item}) => <AddOnItem item={item} />;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: theme.backgroundColor,
      width: width,
      height: height,
      // Shadow for iOS
      shadowColor: theme.shadowColor,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,

      // Elevation for Android
      elevation: 1,
      overflow: 'visible',
    },
    textContainer: {
      marginHorizontal: 5,
      padding: 5,
      fontSize: 15,
      fontWeight: 'bold',
      color: theme.sectionHeaderColor,
      flexShrink: 1,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <BottomSheetFlatList
        style={{flex: 1}}
        data={addOnsInfo}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={addOnRenderItem}></BottomSheetFlatList>
    </View>
  );
}
