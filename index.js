/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true;

import AppContainer from "./rnsrc/navigation/appcontainer";
AppRegistry.registerComponent(appName, () => AppContainer);
