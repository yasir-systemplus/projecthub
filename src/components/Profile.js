import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../config/colors';

export default function Profile({image, index, ...otherProps}) {
  const selectedStyles =
    index == 0 ? {...styles.box, marginLeft: 0} : styles.box;
  return (
    <View style={selectedStyles}>
      <FastImage style={styles.box} source={{uri: image}} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderColor: colors.lightGrey,
    borderWidth: 2,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: 'white',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15,
  },
});
