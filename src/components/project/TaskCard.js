import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import typography from '../../config/typography';
import AppText from '../AppText';
import IconWithDescription from '../IconWithDescription';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

export default function TaskCard({title, description, comments, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <AppText
          style={[typography.heading4, {fontSize: 18, marginBottom: 10}]}>
          {title}
        </AppText>
        <AppText numberOfLines={2}>{description}</AppText>
        <View style={styles.iconContainer}>
          <IconWithDescription
            name="comment"
            component={EvilIcon}
            description={comments.length}
          />
          {/* <IconWithDescription
            name="calendar"
            component={EvilIcon}
            description={completionDate}
          /> */}

          {/* <IconWithDescription
            name="paperclip"
            component={EvilIcon}
            description={attachments}
          /> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  container: {
    backgroundColor: '#f2f3f9',
    minHeight: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    elevation: 1,
    marginBottom: 20,
  },
});
