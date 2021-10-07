import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Screen from './Screen';
import AppInput from '../components/AppInput';
import AppForm from '../components/AppForm';
import {login} from '../services/auth';
import {LoginButton} from '../components/LoginButton';
import Logo from '../assets/images/logo.svg';
import AppButton from '../components/AppButton';

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
        console.log(er.split(':'));
      });
  };
  return (
    <Screen>
      <View style={{flex: 0.45}}>
        <Image
          style={[
            styles.image,
            {
              transform: [{scale: 0.8}],
            },
          ]}
          source={require('../assets/blur.png')}
        />
      </View>
      <View style={styles.logo}>
        <Logo width="100%" height="100%" />
      </View>

      <View style={{flex: 1}}>
        <View style={styles.heading}>
          <Text style={{fontSize: 36, fontWeight: 'bold'}}>
            You were missed
          </Text>
          <Text style={{fontSize: 16}}>
            Enter details to login into your account
          </Text>
        </View>
        <AppForm initialValues={initial} onSubmit={onSubmit}>
          {({handleSubmit, handleBlur, handleChange, values}) => {
            return (
              <View style={{alignItems: 'center'}}>
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
                  secureTextEntry
                />
                <AppButton value="Forgot Password" type="tertiary" />

                <LoginButton value="Submit" onPress={handleSubmit} />
              </View>
            );
          }}
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: -250,
    left: -50,
  },
  logo: {
    flex: 0.4,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: -265,
  },
  heading: {
    marginTop: -20,
    marginBottom: 10,
  },
});
