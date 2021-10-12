import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SubmitForgotPasswordScreen from '../screens/SubmitForgotPasswordScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.WELCOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={routes.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={routes.SUBMIT_FORGOT_PASSWORD}
        component={SubmitForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
