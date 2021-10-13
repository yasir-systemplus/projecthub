import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../config/colors';

export default function PickerSeparator() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    width: '100%',
    backgroundColor: colors.lightGrey,
    height: 1,
    opacity: 0.5,
    marginTop: 5,
    marginBottom: 15,
  },
});
