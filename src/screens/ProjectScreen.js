import React from 'react';
import {View, Text} from 'react-native';
import ProjectHeader from '../components/project/ProjectHeader';

import Screen from './Screen';

export default function ProjectScreen() {
  return (
    <Screen styles={{backgroundColor: 'red'}}>
      <ProjectHeader />
    </Screen>
  );
}
