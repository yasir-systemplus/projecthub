import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Screen from './Screen';
import FormField from '../components/FormField';
import AppForm from '../components/AppForm';
import {LoginButton} from '../components/LoginButton';
import Logo from '../assets/images/logo.svg';
import AppButton from '../components/AppButton';
import * as Yup from 'yup';
import {completeNewPassword} from '../services/auth';
import colors from '../config/colors';
import typography from '../config/typography';
import routes from '../navigation/routes';
import useAuth from '../hooks/useAuth';

export default function LoginScreen({navigation}) {
  const {user, login} = useAuth();

  if (user) {
    navigation.navigate(routes.DASHBOARD);
  }

  const onSubmit = async (data, {setErrors}) => {
    try {
      const authenticatedUser = await login(data.username, data.password);

      if (
        authenticatedUser.challengeName &&
        authenticatedUser.challengeName === 'NEW_PASSWORD_REQUIRED'
      ) {
        completeNewPassword(authenticatedUser, data.password)
          .then(updated => {
            console.log('User Updates', updated);

            if (authenticatedUser) {
              navigation.navigate(routes.DASHBOARD);
            }
          })
          .catch(er => {
            console.log('Updating Password', er.message);
          });
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
      .min(8, 'Password must be greater than 8 characters.')
      .max(16, 'Password must be less than 16 characters.')
      .required('Password is required.'),
  });

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
          <Text style={styles.headingText}>You were missed</Text>
          <Text style={typography.subTitle}>
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
                <FormField name="username" placeholder="Email" />
                <FormField
                  name="password"
                  placeholder="Password"
                  secureTextEntry={true}
                />
                <AppButton
                  onPress={() => {
                    navigation.navigate(routes.FORGOT_PASSWORD);
                  }}
                  value="Forgot Password"
                  type="tertiary"
                />
                <LoginButton value="Submit" />
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
  headingText: {fontSize: 36, fontWeight: 'bold', color: colors.black},
  subTitle: {fontSize: 16},
});
