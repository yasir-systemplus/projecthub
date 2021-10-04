/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import App from './src/App';

Amplify.configure(config);

AppRegistry.registerComponent(appName, () => App);
