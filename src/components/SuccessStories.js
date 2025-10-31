import React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import testSuccessStories from '../data/testSuccessStories';
import SuccessStoryCard from './SuccessStoryCard';
import {constant} from '../constants';

export default function SuccessStories() {
  const {themeMode, theme} = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const successStoryCardRenderItem = ({item}) => (
    <SuccessStoryCard
      storyPic={item.storyPic}
      storyHeader={item.storyHeader}
      storyDetail={item.storyDetail}
    />
  );

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 30,
      marginHorizontal: 5,
      padding: 5,
      flex: 1,
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
      <Text style={styles.sectionTitle}>{t('successStories')}</Text>
      <FlatList
        style={{flex: 1}}
        data={testSuccessStories}
        keyExtractor={item => item.id.toString()}
        renderItem={successStoryCardRenderItem}
        pagingEnabled={false}
        decelerationRate="fast"
      />
    </View>
  );
}
