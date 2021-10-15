import React from 'react';
import {View, StyleSheet} from 'react-native';
import Profiles from '../Profiles';
import colors from '../../config/colors';
import MenuDots from './MenuDots';
import AppText from '../AppText';
import typography from '../../config/typography';

export default function ProfileBar({profiles}) {
  return (
    <View style={styles.container}>
      <Profiles profiles={profiles} size={40} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f3f9',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderColor: colors.lightGrey,
    backgroundColor: 'white',
    opacity: 0.8,
  },
});
