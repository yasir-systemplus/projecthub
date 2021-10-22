import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

export default function Screen({children, styles, loading}) {
  const finalStyles = loading
    ? [defaultStyles.container, styles, defaultStyles.loading]
    : [defaultStyles.container, styles];
  return (
    <View style={finalStyles}>
      {!loading && children}
      {loading && <View style={defaultStyles.loader} />}
    </View>
  );
}

const defaultStyles = StyleSheet.create({
  container: {
    //paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
    flex: 1,

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  loading: {
    backgroundColor: 'red',
  },
});
