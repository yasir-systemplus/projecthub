import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import typography from '../../config/typography';
import colors from '../../config/colors';
import AppText from '../AppText';
import WorkplacePicker from './WorkplacePicker';
import * as queries from '../../graphql/queries';
import API from '@aws-amplify/api';
import {graphqlOperation} from '@aws-amplify/api-graphql';
import useAuth from '../../hooks/useAuth';
import * as faker from 'faker';

// [
//   {
//     id: 1,
//     name: 'Instashowing',
//     image: require('../../assets/images/insta.png'),
//   },
//   {
//     id: 2,
//     name: 'Google',
//     image: require('../../assets/images/google.png'),
//   },
// ]
export default function DashboardHeader() {
  const {user} = useAuth();

  const [workplaces, setWorkplaces] = useState();
  const [workplace, setWorkplace] = useState({
    id: 1,
    title: 'Instashowing',
    image: 'https://picsum.photos/300',
  });

  useEffect(() => {
    user && fetchWorkspaces();
  }, [user, fetchWorkspaces]);

  const fetchWorkspaces = useCallback(async () => {
    const results = await API.graphql(
      graphqlOperation(queries.listWorkspaces, {
        input: {
          filter: {
            managerID: {
              eq: user.sub,
            },
          },
        },
      }),
    );

    const withDummyImages = results.data?.listWorkspaces.items.map(w => ({
      ...w,
      image: faker.image.image(),
    }));

    setWorkplaces(withDummyImages);
    setWorkplace(withDummyImages[0]);
  }, [user]);

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
          Good Morning! Welcome to {workplace.title}
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
