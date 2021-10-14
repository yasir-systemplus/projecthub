import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function RoundButton() {
  return (
    <View style={styles.btn}>
      <Text>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
  },
});
