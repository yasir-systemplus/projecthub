import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import AppText from '~components/AppText';
import CurvedBodyPan from '~components/CurvedBodyPan';
import CurvedPanHeader from '~components/CurvedPanHeader';
import typography from '~config/typography';
import DeadlineWithProgress from '~components/project/DeadlineWithProgress';
import Separator from '~components/Separator';
import ProfileBar from '~components/project/ProfileBar';
import MenuDots from '~components/project/MenuDots';
import FilterTasks from '~components/project/FilterProjects';
import TaskCard from '~components/project/TaskCard';
import routes from '~navigation/routes';
import {useNavigation} from '@react-navigation/core';
import ProfileImageWithRightDescription from '~components/ProfileImageWithRightDescription';
import * as queries from '~graphql/queries';
import * as mutations from '~graphql/mutations';
import {graphqlOperation} from '@aws-amplify/api-graphql';
import MultiSelect from 'react-native-multiple-select';
import useAuth from '~hooks/useAuth';
import FloatingButton from '~components/FloatingButton';
import API from '@aws-amplify/api';
import ModalScreen from '~screens/ModalScreen';
import TaskForm from '~components/task/TaskForm';
import * as _ from 'lodash';
import Storage from '@aws-amplify/storage';
import Screen from './Screen';

export default function ProjectScreen({route}) {
  const [project, setProject] = useState(route.params.data);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(false);
  const {goBack, navigate} = useNavigation();
  const [memberView, setMemberView] = useState(false);
  const [teamMembers, setTeamMembers] = useState();
  const [allMembers, setAllMembers] = useState([]);
  const [showNewTaskUI, setShowNewTaskUI] = useState(false);
  const {user} = useAuth();
  const [loading, setLoading] = useState(false);
  const {title, description} = project;

  useEffect(() => {
    fetchProject();
    fetchUsers();
    return () => {};
  }, [fetchUsers, fetchProject]);

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

      setTeamMembers(
        results.data.getProject.projectMembers.items.map(pm => pm.userID),
      );
    }
  }, [project.id]);

  const fetchUsers = useCallback(async () => {
    const results = await API.graphql(graphqlOperation(queries.listUsers));
    setAllMembers(results.data.listUsers.items);
  }, []);

  const onSelectedItemsChange = selectedItems => {
    setTeamMembers(selectedItems);
    updateTeamToDB(selectedItems);
  };

  const updateTeamToDB = async team => {
    const alreadyInDB = project.projectMembers.items.filter(pm => {
      return !team.includes(tmId => tmId == pm.userID);
    });

    console.log('alreadyInDB', alreadyInDB);

    const notInDb = team.filter(u => !alreadyInDB.some(dbU => dbU.userID == u));
    console.log('notInDb', notInDb);

    if (team.length == 0) {
      alreadyInDB.forEach(async tm => {
        await API.graphql({
          query: mutations.deleteProjectMember,
          variables: {input: {id: tm.id}},
        });
      });
    }

    notInDb.forEach(async tm => {
      await API.graphql({
        query: mutations.createProjectMember,
        variables: {input: {userID: tm, projectID: project.id}},
      });
    });

    //Need some more work here.
  };
  const completedTask = tasks.reduce((sum, current) => {
    return current.taskStatus == 3 ? sum + 1 : sum;
  }, 0);

  const handleSubmitTask = async value => {
    setLoading(true);
    API.graphql({
      query: mutations.createTask,
      variables: {
        input: {
          ..._.omit(value, ['attachments']),
        },
      },
    })
      .then(results => {
        value.attachments.forEach(async attachment => {
          const photo = await fetch(attachment.uri);
          const photoBlob = await photo.blob();

          await Storage.put(attachment.fileName, photoBlob, {
            level: 'public',
            contentType: attachment.type,
          });

          await API.graphql(
            graphqlOperation(mutations.createAttachment, {
              input: {
                taskID: results.data.createTask.id,
                url: await Storage.get(attachment.fileName, {level: 'public'}),
              },
            }),
          );
        });
      })
      .catch(error => console.log('Error', error))
      .finally(() => {
        fetchProject();
        setLoading(false);
      });

    setShowNewTaskUI(false);
  };

  const progress = completedTask / tasks?.length;

  return (
    <Screen loading={loading} styles={{paddingHorizontal: 0}}>
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
                showAddButton={user?.userType == '0010'}
                opened={memberView}
                onAdd={() => setMemberView(prev => !prev)}
                profiles={allMembers.filter(u => teamMembers?.includes(u.id))}
              />
              {memberView && (
                <View style={{marginBottom: 15}}>
                  <MultiSelect
                    hideTags
                    items={allMembers.map(u => ({
                      fullName: u.firstName + ' ' + u.lastName,
                      userId: u.id,
                    }))}
                    uniqueKey="userId"
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={teamMembers}
                    selectText="Select a member"
                    searchInputPlaceholderText="Search users..."
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
          renderItem={({item}) => (
            <TaskCard
              {...item}
              onPress={() =>
                navigate(routes.TASK, {project: project, task: item})
              }
            />
          )}
        />
      </CurvedBodyPan>

      <FloatingButton
        onPress={() => {
          setShowNewTaskUI(true);
        }}
      />

      {showNewTaskUI && (
        <ModalScreen
          header="Add new task"
          visible={showNewTaskUI}
          onClose={() => setShowNewTaskUI(prev => !prev)}>
          <TaskForm
            users={allMembers}
            user={user}
            project={project}
            onSubmitTask={handleSubmitTask}
          />
        </ModalScreen>
      )}
    </Screen>
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
