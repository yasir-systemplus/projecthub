import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Child extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    console.log('Destructor');
    console.log(1);
    console.log(2);
    console.log(3);
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
