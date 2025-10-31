import MaterialIcons from '@react-native-vector-icons/material-icons';
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {constant} from '../constants';

export default function BottomSheetHandleBar({onClose}) {
  const {themeMode, theme} = useSelector(state => state.theme);
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const styles = StyleSheet.create({
    container: {
      height: 50,
      paddingVertical: 10,
      paddingHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      borderColor: theme.primary,
      borderBottomWidth: 0,
      borderLeftWidth: 3,
      borderRightWidth: 3,
      borderTopWidth: 3,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      overflow: 'visible',
      backgroundColor: theme.primary,
    },
    innerContainer: {position: 'absolute', alignItems: 'center'},
    headerText: {
      color: theme.primaryTextColor,
      fontFamily: constant.fonts.NunitoSansRegular,
    },
    closeBtnContainer: {flex: 1, alignItems: 'flex-end'},
  });

  const CloseBottomSheet = () => {
    onClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>{t('addOns')}</Text>
      </View>
      <View style={styles.closeBtnContainer}>
        <Pressable onPress={CloseBottomSheet}>
          <MaterialIcons
            name="close"
            size={25}
            color={theme.primaryTextColor}
          />
        </Pressable>
      </View>
    </View>
  );
}
