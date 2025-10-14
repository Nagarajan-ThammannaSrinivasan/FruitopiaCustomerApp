import '../i18n';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';
import RootNavigator from './rootNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
