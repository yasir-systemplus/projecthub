import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/core';

const profiles = [
  {id: 1, image: 'https://picsum.photos/200'},
  {id: 2, image: 'https://picsum.photos/200'},
  {id: 3, image: 'https://picsum.photos/200'},
  {id: 4, image: 'https://picsum.photos/200'},
];

const tasks = [
  {
    id: 0,
    title: 'Pakory Banao',
    description:
      'Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0. to show the individual deprecation warnings.',
    assignee: 'Muhammad Yasir',
    completionDate: '23/03/2011',
    comments: 34,
    attachments: 12,
  },
  {
    id: 2,
    title: 'Pakory Banao',
    description:
      'Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0. to show the individual deprecation warnings.',
    assignee: 'Muhammad Yasir',
    completionDate: '23/03/2011',
    comments: 34,
    attachments: 29,
  },
];
export default function ProjectScreen() {
  const [filter, setFilter] = useState(false);
  const {navigate} = useNavigation();
  return (
    <ScrollView>
      <CurvedPanHeader />
      <CurvedBodyPan>
        <AppText style={[typography.heading4, styles.title]}>
          Alo Pakory Banne hen, Workshop aur Hackathon
        </AppText>
        <AppText
          style={[typography.bodyLarge, {marginTop: 5, marginBottom: 5}]}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illowe3 inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </AppText>
        <DeadlineWithProgress />
        <Separator />
        <AppText style={typography.heading4}>Assigned To</AppText>
        <ProfileBar profiles={profiles} />
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
        {tasks.map(item => (
          <TaskCard
            key={item.id}
            item={item}
            onPress={() => navigate(routes.TASK)}
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
