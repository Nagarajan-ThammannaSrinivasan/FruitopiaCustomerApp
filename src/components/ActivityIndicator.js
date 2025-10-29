import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

export default function ActivityIndicator() {
  const {themeMode, theme} = useSelector(state => state.theme);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator color={theme.primary} size="large" />
    </View>
  );
}
