import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

export default function RoundButton({
  component: Icon,
  size = 20,
  color = 'black',
  name,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.btn}>
        <Icon size={size} color={color} name={name} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
  },
});
