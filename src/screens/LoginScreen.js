import React from 'react';
import {View} from 'react-native';
import Screen from './Screen';
import AppInput from '../components/AppInput';
import AppForm from '../components/AppForm';
import AppButton from '../components/AppButton';
import {login} from '../services/auth';

export default function LoginScreen() {
  const initial = {
    username: 'yasirshahzad',
    password: 'yasir123',
  };

  const onSubmit = data => {
    login(data.username, data.password)
      .then(result => {
        console.log(result);
      })
      .catch(er => {
        console.log(typeof er, er);
      });
  };
  return (
    <Screen>
      <AppForm initialValues={initial} onSubmit={onSubmit}>
        {({handleSubmit, handleBlur, handleChange, values}) => {
          return (
            <View>
              <AppInput
                name="username"
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.username}
              />
              <AppInput
                name="password"
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.password}
              />
              <AppButton value="Submit" onPress={handleSubmit} />
            </View>
          );
        }}
      </AppForm>
    </Screen>
  );
}
