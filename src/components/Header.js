import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {constant} from '../constants';

export default function Header() {
  const {height, width} = useWindowDimensions();
  const isLandscape = width > height;
  const navigation = useNavigation();
  const drawerNavigation = navigation.getParent();
  const dispatch = useDispatch();
  const {themeMode, theme} = useSelector(state => state.theme);

  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.headerBackgroundColor,
    },
    menuIcon: {
      flex: 1,
      padding: 10,
      textAlign: 'left',
    },
    appTitleText: {
      flex: 2,
      textAlign: 'center',
      fontSize: 20,
      fontFamily: constant.fonts.NunitoSansItalic,
      color: theme.headerTextColor,
    },
    walletIcon: {
      justifyContent: 'center',
      textAlign: 'right',
      padding: 10,
      flex: 1,
    },
  });
  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.container}>
        <MaterialIcons
          name="menu"
          size={30}
          color={theme.headerTextColor}
          onPress={() => drawerNavigation.dispatch(DrawerActions.openDrawer())}
          style={styles.menuIcon}
        />
        <Text style={styles.appTitleText}>{t('hello')} Fruitopian!!</Text>
        <MaterialIcons
          name="wallet"
          size={30}
          color={theme.headerTextColor}
          style={styles.walletIcon}
        />
      </View>
    </SafeAreaView>
  );
}
