import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppText from '../AppText';
import RoundButton from '../RoundButton';

export default function ProjectHeader() {
  return (
    <View style={styles.container}>
      <RoundButton />
      <AppText>In - Progress</AppText>
      <RoundButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});
