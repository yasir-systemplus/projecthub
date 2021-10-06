/* eslint-disable semi */
/**
 * Project Hub
 * Developed by Muhammad Yasir
 * Leaded by Muahmmad Usamma Imam
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Screen from '../src/screens/Screen';
import AppButton from './components/AppButton';
import AppForm from './components/AppForm';
import AppInput from './components/AppInput';
import {View, Text} from 'react-native';

export default function App() {
  const initial = {
    tnc: true,
    newsletter: false,
  };
  const validationSchema = () => {};
  const onSubmit = data => {};
  return (
    <AppForm initialValues={initial} validationSchema={validationSchema}>
      {({handleSubmit, handleBlur, handleChange, handleReset, errors}) => {
        return (
          <View>
            <AppInput name="username" />
            <AppInput name="password" />
            <AppButton value="Submit" />
          </View>
        );
      }}
    </AppForm>
  );
}
