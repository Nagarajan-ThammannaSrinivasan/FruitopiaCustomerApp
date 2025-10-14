import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {constant} from '../constants';

export default function Header() {
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  const drawerNavigation = navigation.getParent();
  const dispatch = useDispatch();
  const {themeMode, theme} = useSelector(state => state.theme);

  const {t, i18n, ready} = useTranslation();
  if (!ready) return null;

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          height: constant.headerHeight * height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.headerBackgroundColor,
        }}>
        <MaterialIcons
          name="menu"
          size={30}
          color={theme.headerTextColor}
          onPress={() => drawerNavigation.dispatch(DrawerActions.openDrawer())}
          style={{
            flex: 1,
            padding: 10,
            textAlign: 'left',
          }}
        />
        <Text
          style={{
            flex: 2,
            textAlign: 'center',
            fontSize: 20,
            color: theme.headerTextColor,
          }}>
          {t('hello')} Fruitopian!!
        </Text>

        <MaterialIcons
          name="wallet"
          size={30}
          color={theme.headerTextColor}
          style={{
            justifyContent: 'center',
            textAlign: 'right',
            padding: 10,
            flex: 1,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
