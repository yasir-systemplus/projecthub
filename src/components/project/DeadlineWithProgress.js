import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../config/colors';
import AppText from '../AppText';

export default function DeadlineWithProgress({dateCreated, progress}) {
  return (
    <View style={styles.container}>
      <View style={styles.deadlineBtn}>
        <Icon style={{marginRight: 10}} color="#3e405c" name="bell" size={25} />
        <AppText>Deadline: </AppText>
        <AppText style={{fontWeight: 'bold', color: '#3e405c'}}>
          {dateCreated}
        </AppText>
      </View>
      <Progress.Circle
        showsText
        color={colors.heading}
        progress={progress}
        thickness={2}
        size={50}
        textStyle={{fontWeight: 'bold'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  deadlineBtn: {
    backgroundColor: '#f2f3f9',
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
