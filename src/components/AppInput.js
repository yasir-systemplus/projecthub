import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import typograpy from '~config/typography';

export default function AppInput({...props}) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    marginVertical: 5,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#cbcbcb',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  input: {
    ...typograpy.bodyLarge,
  },
});
