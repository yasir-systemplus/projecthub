import React from 'react';
import {View, StyleSheet} from 'react-native';
import typography from '../../config/typography';
import colors from '../../config/colors';
import AppText from '../AppText';
import WorkplacePicker from './WorkplacePicker';

export default function DashboardHeader({
  onWorkspaceSelection,
  user,
  selected,
  workspaces,
}) {
  return (
    <View style={styles.header}>
      <View>
        <AppText
          style={[
            typography.heading5,
            {color: colors.darkGrey, fontWeight: 'bold'},
          ]}>
          Hello,
          <AppText style={{color: colors.black}}>
            {user?.email || ' Yasir'}
          </AppText>
        </AppText>
        <AppText style={typography.bodyLarge}>
          Good Morning! Welcome to {selected?.title}
        </AppText>
      </View>
      <WorkplacePicker
        onSelection={onWorkspaceSelection}
        workplace={selected}
        workplaces={workspaces}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center',
  },
});
