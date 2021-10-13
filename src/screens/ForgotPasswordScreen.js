import React, {useState} from 'react';
import AppForm from '../components/AppForm';
import FormField from '../components/FormField';
import FormButton from '../components/FormButton';
import {forgotPassword} from '../services/auth';
import * as Yup from 'yup';
import routes from '../navigation/routes';

export default function ForgotPasswordScreen({navigation}) {
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Enter valid email')
      .required('Email is required.'),
  });

  const handleOnSubmit = (data, {setErrors}) => {
    setLoading(true);
    forgotPassword(data.email)
      .then(result => {
        console.log('sucess', result);
        navigation.navigate(routes.SUBMIT_FORGOT_PASSWORD);
      })
      .catch(err => {
        console.log('rrror', err.message);
        setErrors({email: err.message});
      })
      .finally(() => setLoading(false));
  };

  return (
    <AppForm
      initialValues={{
        email: '',
      }}
      validationSchema={schema}
      onSubmit={handleOnSubmit}>
      {() => {
        return (
          <>
            <FormField name="email" placeholder="Email" />
            <FormButton loading={loading} value="Submit" />
          </>
        );
      }}
    </AppForm>
  );
}
