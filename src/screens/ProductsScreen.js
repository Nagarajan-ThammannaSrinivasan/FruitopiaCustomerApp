import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

export default function ProductsScreen() {
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
      fontWeight: 'normal',
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: theme.primaryTextColor}]}>
        {t('products')}
      </Text>
    </View>
  );
}
