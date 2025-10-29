import '../i18n';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';
import RootNavigator from './rootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </GestureHandlerRootView>
  );
}
