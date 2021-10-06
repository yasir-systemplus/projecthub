import React from 'react';
import {View, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';

export default function AppButton({value, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <Text>{value}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
