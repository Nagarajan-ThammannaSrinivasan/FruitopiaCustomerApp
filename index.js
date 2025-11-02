/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/components/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => {
  console.log('⏱ JS started loading at', Date.now());
  return App;
});
