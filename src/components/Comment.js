import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

export default function Comment({comment, style = {}}) {
  console.log(comment);
  return (
    <View style={[styles.contaner, style]}>
      <Image
        width={50}
        height={50}
        style={styles.image}
        source={{uri: comment.commentator.profileURL, height: 50, width: 50}}
      />
      <View>
        <AppText style={{color: colors.heading, fontWeight: 'bold'}}>
          {comment.commentator.firstName + ' ' + comment.commentator.lastName}
        </AppText>
        <AppText style={{color: colors.heading, fontWeight: 'bold'}}>
          {new Date(comment.createdAt).toLocaleTimeString() + ' '}
          {new Date(comment.createdAt).toLocaleDateString()}
        </AppText>
        <AppText style={{paddingRight: 65, color: colors.darkGrey}}>
          {comment.description}
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
