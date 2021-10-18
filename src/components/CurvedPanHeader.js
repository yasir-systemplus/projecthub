import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from './AppText';
import RoundButton from './RoundButton';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/core';

export default function CurvedPanHeader({onBack, ...otherProps}) {
  return (
    <View style={styles.container} {...otherProps}>
      <RoundButton
        onPress={onBack}
        component={Icon}
        color={'#3e405c'}
        name="chevron-left"
      />
      <AppText>In - Progress</AppText>
      <RoundButton
        component={Icon}
        color={'#3e405c'}
        name="dots-three-vertical"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
