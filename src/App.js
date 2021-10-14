/* eslint-disable semi */
/**
 * Project Hub
 * Developed by Muhammad Yasir
 * Leaded by Muahmmad Usamma Imam

 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import DashboardNavigator from './navigation/DashboardNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './navigation/routes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.LOGIN}>
        <Stack.Screen name={routes.AUTH} component={AuthNavigator} />
        <Stack.Screen
          options={{headerShown: false}}
          name={routes.DASHBOARD}
          component={DashboardNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
