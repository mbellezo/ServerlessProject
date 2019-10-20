/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Amplify from 'aws-amplify' // NEW
import config from './src/aws-exports' // NEW
Amplify.configure(config) // NEW

AppRegistry.registerComponent(appName, () => App);
