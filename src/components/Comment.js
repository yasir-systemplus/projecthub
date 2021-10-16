import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

export default function Comment({comment}) {
  return (
    <View style={styles.contaner}>
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
        <Text>{comment.message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    borderRadius: 50,
    marginRight: 20,
  },
});
