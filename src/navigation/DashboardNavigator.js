import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
