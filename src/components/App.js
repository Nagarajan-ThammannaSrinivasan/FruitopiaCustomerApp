import '../i18n';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';
import RootNavigator from './RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

export default function App() {
  const styles = StyleSheet.create({
    flex1: {flex: 1},
  });

  return (
    <GestureHandlerRootView style={styles.flex1}>
      <SafeAreaProvider>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
