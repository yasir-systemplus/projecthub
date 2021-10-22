import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import AppText from '../components/AppText';
import CurvedBodyPan from '../components/CurvedBodyPan';
import CurvedPanHeader from '../components/CurvedPanHeader';
import typography from '../config/typography';
import DeadlineWithProgress from '../components/project/DeadlineWithProgress';
import Separator from '../components/Separator';
import ProfileBar from '../components/project/ProfileBar';
import MenuDots from '../components/project/MenuDots';
import FilterTasks from '../components/project/FilterProjects';
import TaskCard from '../components/project/TaskCard';
import routes from '../navigation/routes';
import {useNavigation, useRoute} from '@react-navigation/core';
import ProfileImageWithRightDescription from '../components/ProfileImageWithRightDescription';
import * as queries from '../graphql/queries';
import {graphqlOperation} from '@aws-amplify/api-graphql';

import API from '@aws-amplify/api';
// const profiles = [
//   {id: 1, image: 'https://picsum.photos/200'},
//   {id: 2, image: 'https://picsum.photos/200'},
//   {id: 3, image: 'https://picsum.photos/200'},
//   {id: 4, image: 'https://picsum.photos/200'},
// ];

// const tasks = [
//   {
//     id: 0,
//     title: 'Pakory Banao',
//     description:
//       'Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0. to show the individual deprecation warnings.',
//     assignee: 'Muhammad Yasir',
//     completionDate: '23/03/2011',
//     comments: 34,
//     attachments: 12,
//   },
//   {
//     id: 2,
//     title: 'Pakory Banao',
//     description:
//       'Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0. to show the individual deprecation warnings.',
//     assignee: 'Muhammad Yasir',
//     completionDate: '23/03/2011',
//     comments: 34,
//     attachments: 29,
//   },
// ];
export default function ProjectScreen({route}) {
  const [project] = useState(route.params.data);
  const [tasks, setTasks] = useState(null);
  const [filter, setFilter] = useState(false);
  const {goBack, navigate} = useNavigation();

  useEffect(() => {
    fetchTasks();
    return () => {};
  }, []);

  const fetchTasks = useCallback(async () => {
    const results = await API.graphql(
      graphqlOperation(queries.listTasks, {
        filter: {
          projectID: {
            contains: project.id,
          },
        },
      }),
    );

    console.log(results.data.listTasks.items);
    setTasks(results.data.listTasks.items);
  }, [project.id]);

  //Custom Hook. 
  
  const {title, description} = project;
  console.log(project);
  return (
    <ScrollView>
      <CurvedPanHeader onBack={goBack} />
      <CurvedBodyPan>
        <AppText style={[typography.heading4, styles.title]}>{title}</AppText>
        <AppText
          style={[typography.bodyLarge, {marginTop: 5, marginBottom: 5}]}>
          {description}
        </AppText>
        <DeadlineWithProgress />
        <Separator />
        <AppText style={typography.heading4}>Team Lead</AppText>
        <ProfileImageWithRightDescription
          image={project.teamLead.profileURL}
          role="Team Lead"
          name={project.teamLead.firstName + ' ' + project.teamLead.lastName}
        />
        <Separator />
        <AppText style={typography.heading4}>Assigned To</AppText>
        {/* <ProfileBar profiles={} /> */}
        <Separator />
        <View style={styles.tasksHeader}>
          <AppText style={typography.heading4}>Recent Tasks</AppText>
          <MenuDots onPress={() => setFilter(prev => !prev)} />
        </View>
        <FilterTasks
          visible={filter}
          onApplyFilter={filterData => console.log(filterData)}
          onClose={() => setFilter(prev => !prev)}
        />
        {tasks &&
          tasks.map(task => (
            <TaskCard
              key={task.id}
              {...task}
              onPress={() =>
                navigate(routes.TASK, {project: project, task: task})
              }
            />
          ))}
      </CurvedBodyPan>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#3e405c',
  },
  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
