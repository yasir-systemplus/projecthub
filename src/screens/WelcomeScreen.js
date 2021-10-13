import React, {useEffect} from 'react';
import {View} from 'react-native';
import AppButton from '../components/AppButton';
import useAuth from '../hooks/useAuth';
import routes from '../navigation/routes';

export default function WelcomeScreen({navigation}) {
  const {user} = useAuth();
  useEffect(() => {
    if (user) {
      navigation.navigate(routes.DASHBOARD);
    }
  }, [user, navigation]);

  return (
    <View>
      <AppButton
        value="Login "
        onPress={() => navigation.navigate(routes.LOGIN)}
      />
    </View>
  );
}
