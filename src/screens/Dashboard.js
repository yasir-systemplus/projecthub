import React, {useEffect, useCallback, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Screen from './Screen';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import FeatureCard from '../components/dashboard/FeatureCard';
import ProjectCard from '../components/ProjectCard';
import AppText from '../components/AppText';
import typography from '../config/typography';
import * as queries from '../graphql/queries';
import {graphqlOperation} from '@aws-amplify/api-graphql';
import API from '@aws-amplify/api';
import useAuth from '../hooks/useAuth';

export default function Dashboard({navigation}) {
  const [loader, setLoader] = useState(true);
  const [workspaces, setWorkspaces] = useState(null);
  const [workspace, setWorkspace] = useState(null);
  const [projects, setProjects] = useState(null);

  const {user} = useAuth();

  useEffect(() => {
    user && fetchWorkspaces();
    fetchProjects();
    return () => {};
  }, [user, fetchWorkspaces, fetchProjects]);

  useEffect(() => {
    fetchProjects();
    return () => {};
  }, [workspace, fetchProjects]);

  const fetchWorkspaces = useCallback(async () => {
    const result = await API.graphql(graphqlOperation(queries.listWorkspaces), {
      filter: {
        managerID: {
          eq: user.id,
        },
      },
    });

    setWorkspaces(result.data.listWorkspaces.items);
    setWorkspace(result.data.listWorkspaces.items[0]);
    setLoader(false);
  }, [user]);

  const fetchProjects = useCallback(async () => {
    if (workspace) {
      const results = await API.graphql(
        graphqlOperation(queries.listProjects, {
          filter: {
            workspaceID: {
              eq: workspace?.id,
            },
          },
        }),
      );

      setProjects(results.data.listProjects.items);
    }
  }, [workspace]);

  const handleWorkspaceSelection = selectedWorkspace => {
    setWorkspace(selectedWorkspace);
  };

  return (
    <Screen loading={loader}>
      <DashboardHeader
        onWorkspaceSelection={handleWorkspaceSelection}
        selected={workspace}
        user={user}
        workspaces={workspaces}
      />
      <FeatureCard />
      <AppText style={styles.heading}>My Projects</AppText>
      <ScrollView>
        {projects?.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  heading: {
    ...typography.heading4,
    marginVertical: 10,
  },
});
