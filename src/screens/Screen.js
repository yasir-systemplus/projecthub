import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

export default function Screen({children, styles}) {
  return <View style={[defaultStyles.container, styles]}>{children}</View>;
}

const defaultStyles = StyleSheet.create({
  container: {
    //paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
    flex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  },
});
