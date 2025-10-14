import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function UserInfo() {
  const {themeMode, theme} = useSelector(state => state.theme);
  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  return (
    <SafeAreaView
      style={{
        padding: 10,
        backgroundColor: theme.primary,
        borderBottomColor: theme.contrastTextColor,
        borderRadius: 8,
      }}>
      <Text
        style={{
          color: theme.contrastTextColor,
          fontSize: 18,
          fontWeight: 'bold',
          fontFamily: 'nunito-sans',
        }}>
        Pavamana
      </Text>
      <Text style={{color: theme.contrastTextColor, fontSize: 15}}>
        9787300135
      </Text>
      <Text style={{color: theme.contrastTextColor, fontSize: 15}}>
        pavamana@gmail.com
      </Text>
    </SafeAreaView>
  );
}
