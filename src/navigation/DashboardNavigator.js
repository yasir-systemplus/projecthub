import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/Dashboard';
import routes from './routes';
import ProjectScreen from '../screens/ProjectScreen';
import TaskScreen from '../screens/TaskScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.PROJECT}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="dashboard" component={DashboardScreen} />
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.PROJECT}
        component={ProjectScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.TASK}
        component={TaskScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
