import React from 'react';

import colors from '~config/colors';
import typography from '~config/typography';
import AppButton from '~components/AppButton';
import AppText from '~components/AppText';
import Card from '~components/Card';
import {StyleSheet} from 'react-native';

export default function FeatureCard() {
  return (
    <Card
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[colors.gradient1, colors.gradient2]}>
      <AppText style={styles.heading}>You have 10 new tasks</AppText>
      <AppText style={styles.heading}>to finish today.</AppText>
      <AppButton style={styles.btn} type="secondary" value="View Taks" />
    </Card>
  );
}

const styles = StyleSheet.create({
  btn: {width: '40%', marginTop: 15},
  heading: {
    ...typography.heading5,
    color: colors.white,
    fontWeight: 'bold',
  },
});
