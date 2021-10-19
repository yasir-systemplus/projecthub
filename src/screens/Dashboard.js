import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Screen from './Screen';
import useAuth from '../hooks/useAuth';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import FeatureCard from '../components/dashboard/FeatureCard';
import Project from '../components/Project';
import AppText from '../components/AppText';
import typography from '../config/typography';

export default function Dashboard({navigation}) {
  const {user} = useAuth();
  return (
    <Screen>
      <DashboardHeader />
      <FeatureCard />
      <AppText style={styles.heading}>My Projects</AppText>
      <ScrollView>
        <Project title="Instashowing" completed={19} pending={4} />
        <Project title="Plater Food" completed={2} pending={2} />
        <Project title="Quarter Saji" completed={2} pending={4} />
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
