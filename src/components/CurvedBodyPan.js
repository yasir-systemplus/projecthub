import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function ProjectBodyPan({children, ...otherProps}) {
  return (
    <View style={[styles.container]} {...otherProps}>
      {children}
    </View>
  );
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
