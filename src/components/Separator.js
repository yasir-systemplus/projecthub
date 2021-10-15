import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../config/colors';

export default function Separator({size}) {
  return <View style={[styles.sep, {marginVertical: size}]} />;
}
const styles = StyleSheet.create({
  sep: {
    width: '100%',
    backgroundColor: colors.lightGrey,
    height: 1,
    opacity: 0.5,
    marginTop: 15,
    marginBottom: 15,
  },
});
