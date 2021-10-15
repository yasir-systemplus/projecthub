import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function ProjectBodyPan({children}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});
