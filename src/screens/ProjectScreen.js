import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
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
import ProfileImageWithRightDescription from '../components/ProfileImageWithRightDescription';
import * as queries from '../graphql/queries';
import {graphqlOperation} from '@aws-amplify/api-graphql';
import MultiSelect from 'react-native-multiple-select';

import API from '@aws-amplify/api';

export default function ProjectScreen({route}) {
  const [project, setProject] = useState(route.params.data);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(false);
  const {goBack, navigate} = useNavigation();
  const [memberView, setMemberView] = useState(false);
  const [teamMembers, setTeamMembers] = useState();
  const [allMembers, setAllMembers] = useState([]);

  useEffect(() => {
    fetchProject();
    fetchUsers();
    return () => {};
  }, [fetchUsers, fetchProject]);

  const onSelectedItemsChange = selectedItems => {
    setTeamMembers(selectedItems);
    console.log(selectedItems);
  };

  const fetchProject = useCallback(async () => {
    if (project?.id) {
      const results = await API.graphql({
        query: queries.getProject,
        variables: {
          id: project.id,
        },
      });

      setProject(results.data.getProject);
      setTasks(results.data.getProject.tasks.items);
      console.log(
        'selected members from DB',
        results.data.getProject.projectMembers.items.map(tm => ({
          ...tm,
          fullName: tm.user.firstName + ' ' + tm.user.lastName,
        })),
      );
      setTeamMembers(
        results.data.getProject.projectMembers.items.map(tm => ({
          ...tm,
          fullName: tm.user.firstName + ' ' + tm.user.lastName,
        })),
      );
    }
  }, [project.id]);

  const fetchUsers = useCallback(async () => {
    const results = await API.graphql(graphqlOperation(queries.listUsers));
    console.log(
      'All Users',
      results.data.listUsers.items.map(u => ({
        ...u,
        fullName: u.firstName + ' ' + u.lastName,
      })),
    );
    setAllMembers(
      results.data.listUsers.items.map(u => ({
        ...u,
        fullName: u.firstName + ' ' + u.lastName,
      })),
    );
  }, []);

  const {title, description} = project;

  const completedTask = tasks.reduce((sum, current) => {
    if (current.taskStatus == 3) {
      return sum + 1;
    }

    return sum;
  }, 0);

  const progress = completedTask / tasks?.length;

  return (
    <>
      <CurvedPanHeader
        onMenuToggle={() => console.log('We will do something')}
        title={project.workspace.title}
        onBack={goBack}
      />
      <CurvedBodyPan>
        <FlatList
          ListHeaderComponent={() => (
            <>
              <AppText style={[typography.heading4, styles.title]}>
                {title}
              </AppText>
              <AppText
                style={[typography.bodyLarge, {marginTop: 5, marginBottom: 5}]}>
                {description}
              </AppText>

              <DeadlineWithProgress
                progress={progress || 0}
                dateCreated={new Date(project.createdAt).toLocaleDateString()}
              />
              <Separator />
              <AppText style={typography.heading5}>Team Lead</AppText>
              <ProfileImageWithRightDescription
                image={project.teamLead.profileURL}
                role="Team Lead"
                name={
                  project.teamLead.firstName + ' ' + project.teamLead.lastName
                }
              />
              <Separator />
              <AppText style={typography.heading5}>Assigned To</AppText>
              <ProfileBar
                onAdd={() => setMemberView(prev => !prev)}
                profiles={[]}
              />
              {memberView && (
                <View>
                  <MultiSelect
                    items={allMembers}
                    uniqueKey="id"
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={teamMembers}
                    selectText="Select members"
                    searchInputPlaceholderText="Search members..."
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="fullName"
                    searchInputStyle={{color: '#CCC'}}
                    submitButtonColor="#CCC"
                    submitButtonText="Submit"
                  />
                </View>
              )}

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
            </>
          )}
          data={tasks}
          renderItem={({item, index}) => (
            <TaskCard
              {...item}
              onPress={() =>
                navigate(routes.TASK, {project: project, task: item})
              }
            />
          )}
        />
      </CurvedBodyPan>
    </>
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
