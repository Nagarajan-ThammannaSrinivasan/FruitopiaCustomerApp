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
    safeArea: {
      backgroundColor: theme.headerBackgroundColor,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      backgroundColor: theme.headerBackgroundColor,
      paddingHorizontal: 10,
    },
    leftIcon: {
      padding: 5,
    },
    menuIcon: {
      flex: 1,
      padding: 10,
      alignItems: 'left',
    },
    titleText: {
      fontSize: 20,
      fontFamily: constant.fonts.NunitoSansBold,
      color: theme.contrastTextColor,
    },
    walletIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      flex: 1,
    },
    rightIconsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightIcon: {
      paddingHorizontal: 5,
    },
    titleContainer: {
      flex: 1, // fills remaining space
      alignItems: 'center',
    },
  });
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        {/* Left menu icon */}
        <MaterialIcons
          name="menu"
          size={25}
          color={theme.contrastTextColor}
          onPress={() => drawerNavigation.dispatch(DrawerActions.openDrawer())}
          style={styles.leftIcon}
        />

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{t('hello')} Fruitopian!!</Text>
        </View>

        {/* Right icons */}
        <View style={styles.rightIconsContainer}>
          <MaterialIcons
            name="wallet"
            size={25}
            color={theme.contrastTextColor}
            style={styles.rightIcon}
          />
          <MaterialIcons
            name="notifications"
            size={25}
            color={theme.contrastTextColor}
            style={styles.rightIcon}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
