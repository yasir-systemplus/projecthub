import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default function AppInput() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
  },
});
