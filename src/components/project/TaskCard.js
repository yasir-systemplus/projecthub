import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import typography from '~config/typography';
import AppText from '~components/AppText';
import IconWithDescription from '~components/IconWithDescription';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as utils from '~shared/utilities';
export default function TaskCard({
  title,
  description,

  onPress,
  deadLine,
  ...others
}) {
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
            name="speedometer-outline"
            component={Ionicons}
            description={utils.priorityMessages[others.priority]}
          />
          <IconWithDescription
            name="calendar"
            component={EvilIcon}
            description={deadLine}
          />

          <IconWithDescription
            name="exclamation"
            component={EvilIcon}
            description={utils.taskStatusMessages[others.taskStatus]}
          />
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
