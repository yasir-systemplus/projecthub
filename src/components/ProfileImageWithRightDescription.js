import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import AppText from './AppText';

export default function ProfileImageWithRightDescription({image, name, role}) {
  return (
    <View style={styles.box}>
      <FastImage style={styles.image} source={{uri: image}} />
      <AppText>
        {name} "{role}"
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    marginVertical: 7,
  },
  image: {height: 25, width: 25, marginRight: 10, borderRadius: 50},
});
