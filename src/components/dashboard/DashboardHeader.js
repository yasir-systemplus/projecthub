import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import typography from '../../config/typography';
import colors from '../../config/colors';
import AppText from '../AppText';
import WorkplacePicker from './WorkplacePicker';
import * as queries from '../../graphql/queries';
import API from '@aws-amplify/api';
import {graphqlOperation} from '@aws-amplify/api-graphql';
import useAuth from '../../hooks/useAuth';

export default function DashboardHeader() {
  const {user} = useAuth();
  const [workplace, setWorkplace] = useState({
    id: 1,
    name: 'Instashowing',
    image: require('../../assets/images/insta.png'),
  });

  const [workplaces, setWorkplaces] = useState([
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
  ]);

  useEffect(() => {}, [user]);
  console.log('from dashboard', user?.workspaces);

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
            {user?.email || ' Yasir'}
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
