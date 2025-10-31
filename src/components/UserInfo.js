import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import {constant} from '../constants';

export default function UserInfo() {
  const {themeMode, theme} = useSelector(state => state.theme);
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: theme.primary,
      borderBottomColor: theme.contrastTextColor,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
    },
    userName: {
      color: theme.contrastTextColor,
      fontSize: 18,
      fontFamily: constant.fonts.NunitoSansBold,
    },
    userContactNumber: {
      color: theme.contrastTextColor,
      fontSize: 15,
      fontFamily: constant.fonts.NunitoSansRegular,
    },
    userEmail: {
      color: theme.contrastTextColor,
      fontSize: 15,
      fontFamily: constant.fonts.NunitoSansRegular,
    },
  });

  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.container}>
        <Text style={styles.userName}>Pavamana</Text>
        <Text style={styles.userContactNumber}>9787300135</Text>
        <Text style={styles.userEmail}>pavamana@gmail.com</Text>
      </View>
    </SafeAreaView>
  );
}
