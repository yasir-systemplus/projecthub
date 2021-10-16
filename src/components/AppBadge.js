import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from './AppText';

export default function AppBadge({
  information,
  color = 'blue',
  textColor = 'white ',
}) {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <AppText style={[{color: textColor, textAlign: 'center'}]}>
        {information}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    width: 100,
    textAlign: 'center',
  },
});
