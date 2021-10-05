/**
 * Project Hub
 * Developed by Muhammad Yasir
 * Leaded by Muahmmad Usamma Imam
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Screen from '../src/screens/Screen';
import {TouchableWithoutFeedback, Text} from 'react-native';
import Child from './components/Child';

export default class App extends React.Component {
  state = {
    show: true,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Screen>
        {this.state.show && <Child />}

        <TouchableWithoutFeedback
          onPress={() => {
            this.setState(!this.state.show);
            console.log('object');
          }}>
          <Text>Destroy</Text>
        </TouchableWithoutFeedback>
      </Screen>
    );
  }
}
