import MaterialIcons from '@react-native-vector-icons/material-icons';
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';

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
  });

  const CloseBottomSheet = () => {
    onClose();
  };

  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', alignItems: 'center'}}>
        <Text style={{color: theme.primaryTextColor}}>{t('addOns')}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
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
