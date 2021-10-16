import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

export default function Comment({comment, style = {}}) {
  return (
    <View style={[styles.contaner, style]}>
      <Image
        width={50}
        height={50}
        style={styles.image}
        source={{uri: comment.profile, height: 50, width: 50}}
      />
      <View>
        <AppText style={{color: colors.heading, fontWeight: 'bold'}}>
          {comment.commentor}
        </AppText>
        <AppText style={{paddingRight: 65, color: colors.darkGrey}}>
          {comment.message}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  image: {
    borderRadius: 50,
    marginRight: 20,
  },
});
