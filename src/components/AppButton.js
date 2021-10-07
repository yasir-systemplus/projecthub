import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

export default function AppButton({value, type, onPress}) {
  let dynamicBg = '#8734dc';
  let dynamicText = '#ffff';
  let dynamicBorder = 10;

  if (type === 'secondary') {
    dynamicBg = 'white';
    dynamicText = '#707070';
    dynamicBorder = 60;
  } else if (type === 'tertiary') {
    dynamicBg = 'transparent';
    dynamicText = '#931ee4';
    dynamicBorder = 0;
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.button,
          {backgroundColor: dynamicBg, borderRadius: dynamicBorder},
        ]}>
        <Text style={[styles.text, {color: dynamicText}]}>{value}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
