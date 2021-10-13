import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Card({colors, children, onPress, ...otherProps}) {
  const newColors = colors.length <= 1 ? [colors[0], colors[0]] : colors;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient {...otherProps} colors={newColors} style={styles.card}>
        {children}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    elevation: 2,
    minHeight: 130,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
});
