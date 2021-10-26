import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '~config/colors';
import AppText from './AppText';

export default function IconWithDescription({
  border = {borderWidth: 1, borderColor: colors.lightGrey, borderRadius: 5},
  color = colors.heading,
  component: Component,
  description,
  name,
  size = 20,
}) {
  return (
    <View style={styles.container}>
      <Component
        style={[styles.icon, border]}
        name={name}
        size={size}
        color={color}
      />
      <AppText>{description}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 3,
    marginRight: 10,
  },
});
