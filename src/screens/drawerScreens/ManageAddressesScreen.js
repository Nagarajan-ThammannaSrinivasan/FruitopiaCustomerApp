import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {constant} from '../../constants';

export default function ManageAddressesScreen() {
  const {themeMode, theme} = useSelector(state => state.theme);
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.backgroundColor,
    },
    text: {
      fontSize: 16,
      textAlign: 'center',
      fontFamily: constant.fonts.NunitoSansRegular,
      color: theme.primaryTextColor,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: theme.primaryTextColor}]}>
        {t('manageAddresses')}
      </Text>
    </View>
  );
}
