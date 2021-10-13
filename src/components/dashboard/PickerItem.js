import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../AppText';
import PickerImage from './PickerImage';
import typography from '../../config/typography';
export default function PickerItem({item: workplace, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <PickerImage image={workplace.image} onPress={onPress} />
        <View style={styles.text}>
          <AppText style={typography.workplacePickerHeading}>
            {workplace.name}
          </AppText>
          <AppText style={typography.workplacePickerSubtitle}>
            23 tasks assigned
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  text: {
    marginLeft: 10,
  },
});
