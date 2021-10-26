import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '~config/colors';

export default function PickerImage({image, onPress, ...otherProps}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <FastImage style={styles.box} source={{uri: image}} {...otherProps} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
