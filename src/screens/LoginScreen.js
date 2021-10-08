import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Screen from './Screen';
import FormField from '../components/FormField';
import AppForm from '../components/AppForm';
import {login} from '../services/auth';
import {LoginButton} from '../components/LoginButton';
import Logo from '../assets/images/logo.svg';
import AppButton from '../components/AppButton';
import * as Yup from 'yup';
import NewPasswordChallenge from '../components/NewPasswordChallenge';

export default function LoginScreen() {
  const [challenge, setChallenge] = useState(false);

  const onSubmit = async (data, {setErrors}) => {
    try {
      const user = await login(data.username, data.password);
      console.log(user);
      if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        setChallenge(true);
        // completeNewPassword(user, '23e1dwqsxas')
        //   .then(user => {
        //     console.log(user);
        //   })
        //   .catch(er => {
        //     console.log(er);
        //   });
      } else {
        // other situations
      }
    } catch (e) {
      switch (e.message) {
        case 'Username should be either an email or a phone number.':
          setErrors({username: e.message});
          break;
        case 'Password did not conform with policy: Password not long enough':
          setErrors({password: e.message});
          break;
        case 'User is not confirmed.':
          setErrors({general: e.message});
          break;
        case 'Incorrect username or password.':
          setErrors({password: e.message});
          break;
        case 'User does not exist.':
          setErrors({username: e.message});
          break;
        default:
          setErrors({general: e.message});
      }
    }
  };

  const schema = Yup.object().shape({
    username: Yup.string()
      .email('Enter valid email.')
      .required('Username is required.'),
    password: Yup.string()
      .min(2, 'Password is too short.')
      .max(16, 'Password must be less than 16 characters.')
      .required('Password is required.'),
  });

  const handleNewPassword = pass => {
    console.log(pass);
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
        <AppForm
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={schema}
          onSubmit={onSubmit}>
          {() => {
            return (
              <View style={{alignItems: 'center'}}>
                <FormField name="username" />
                <FormField name="password" secureTextEntry={true} />
                <AppButton
                  onPress={() => setChallenge(true)}
                  value="Forgot Password"
                  type="tertiary"
                />
                <LoginButton value="Submit" />
              </View>
            );
          }}
        </AppForm>
      </View>
      {challenge && (
        <NewPasswordChallenge
          onFinishEditing={data => console.log(data)}
          onRequestClose={() => setChallenge(false)}
          onSubmit={handleNewPassword}
        />
      )}
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
