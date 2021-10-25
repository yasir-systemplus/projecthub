import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import AppText from '../AppText';
import colors from '../../config/colors';
export default function CommentActionBar({onPress, hide = []}) {
  return (
    <View style={styles.container}>
      {!hide.includes('reply') && (
        <TouchableWithoutFeedback onPress={() => onPress('reply')}>
          <AppText style={{marginLeft: 87, color: colors.heading}}>
            Reply
          </AppText>
        </TouchableWithoutFeedback>
      )}
      {!hide.includes('edit') && (
        <TouchableWithoutFeedback onPress={() => onPress('edit')}>
          <AppText style={{marginLeft: 87, color: colors.heading}}>
            Edit
          </AppText>
        </TouchableWithoutFeedback>
      )}
      {!hide.includes('delete') && (
        <TouchableWithoutFeedback onPress={() => onPress('delete')}>
          <AppText style={{marginLeft: 87, color: colors.heading}}>
            Delete
          </AppText>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
