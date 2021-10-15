import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CurvedPanHeader from '../components/CurvedPanHeader';
import CurvedBodyPan from '../components/CurvedBodyPan';
import AppText from '../components/AppText';
import typography from '../config/typography';
import colors from '../config/colors';

export default function TaskScreen() {
  return (
    <>
      <CurvedPanHeader />
      <CurvedBodyPan>
        <AppText style={[typography.heading4, styles.title]}>
          Alo Pakory Banne hen, Workshop aur Hackathon
        </AppText>
        <AppText
          style={[typography.bodyLarge, {marginTop: 5, marginBottom: 5}]}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illowe3 inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </AppText>
      </CurvedBodyPan>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#3e405c',
  },
  container: {},
});
