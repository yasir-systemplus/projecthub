import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

export default function IconWithDescription({
  component: Component,
  task: t,
  size = 20,
  name,
  color = colors.heading,
  description,
}) {
  return (
    <View style={styles.container}>
      <Component style={styles.icon} name={name} size={size} color={color} />
      <AppText>{description}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 5,
    padding: 3,
    marginRight: 10,
  },
});
