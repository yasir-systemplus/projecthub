import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../config/colors';
import typography from '../config/typography';
import AppText from './AppText';
import Card from './Card';
import Profiles from './Profiles';
import ProgressBar from './ProgressBar';

export default function Project({title, completed, pending}) {
  const profiles = [
    {id: 1, image: 'https://picsum.photos/200'},
    {id: 2, image: 'https://picsum.photos/200'},
    {id: 3, image: 'https://picsum.photos/200'},
    {id: 4, image: 'https://picsum.photos/200'},
  ];

  const percent = completed / (pending + completed);
  return (
    <Card colors={['#fff']}>
      <AppText style={[typography.heading4, {marginBottom: 8}]}>
        {title}
      </AppText>
      <View style={[styles.dotLine, styles.dotsContainer]}>
        <View style={styles.dotLine}>
          <View style={[styles.dot, styles.blueDot]} />
          <AppText>15 Tasks</AppText>
        </View>
        <View style={styles.dotLine}>
          <View style={[styles.dot, styles.goldDot]} />
          <AppText>7 Completed</AppText>
        </View>
        <View style={styles.dotLine}>
          <View style={[styles.dot, styles.redDot]} />
          <AppText>2 Pending</AppText>
        </View>
      </View>
      <ProgressBar
        style={styles.bar}
        height={12}
        progress={percent}
        borderWidth={0}
        unfilledColor={colors.lightGrey}
        width={null}
        animationType="timing"
      />
      <Profiles profiles={profiles} />
    </Card>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    borderRadius: 20,
    marginTop: 7,
    marginRight: 5,
  },
  redDot: {
    backgroundColor: 'red',
  },
  blueDot: {
    backgroundColor: 'blue',
  },
  goldDot: {
    backgroundColor: 'gold',
  },
  dotLine: {
    flexDirection: 'row',
  },
  dotsContainer: {
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  bar: {marginTop: 10, marginBottom: 10},
});
