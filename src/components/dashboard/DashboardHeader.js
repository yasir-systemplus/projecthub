import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import typography from '../../config/typography';
import colors from '../../config/colors';
import AppText from '../AppText';
import WorkplacePicker from './WorkplacePicker';
const workplaces = [
  {
    id: 1,
    name: 'Instashowing',
    image: require('../../assets/images/insta.png'),
  },
  {
    id: 2,
    name: 'Google',
    image: require('../../assets/images/google.png'),
  },
];

export default function DashboardHeader({user}) {
  const [workplace, setWorkplace] = useState(workplaces[0]);

  const handleWorkplaceSelection = selected => {
    setWorkplace(selected);
  };

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
            {' Yasir' || user?.attributes.email}
          </AppText>
        </AppText>
        <AppText style={typography.bodyLarge}>
          Good Morning! Welcome to {workplace.name}
        </AppText>
      </View>
      <WorkplacePicker
        onSelection={handleWorkplaceSelection}
        workplace={workplace}
        workplaces={workplaces}
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
