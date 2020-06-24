
import {AppRegistry} from 'react-native';
import Login from './src/screens/Login';
import Router from './src/router/Router';
import {name as appName} from './app.json';
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => Router);
