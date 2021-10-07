import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Screen({children}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    //paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
    flex: 1,
  },
});
