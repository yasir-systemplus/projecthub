import React, {useState} from 'react';
import AppForm from '~components/AppForm';
import FormButton from '~components/FormButton';
import FormField from '~components/FormField';
import * as Yup from 'yup';
import routes from '~navigation/routes';

export default function SubmitForgotPasswordScreen({navigation}) {
  const schema = Yup.object().shape({
    username: Yup.string().email().required('Enter valid email.'),
    code: Yup.number('Code must be a number.')
      .min(6, 'Minimum 9 characters are required.')
      .required('Code is required.'),
    password: Yup.string().min(8).required('New password is required.'),
  });

  const hanldeSubmit = (data, {setErrors}) => {
    const {username, code, password} = data;
    // forgotPasswordSubmit(username, code, password)
    //   .then(results => {
    //     console.log('results from submit', results);
    //     navigation.navigate(routes.LOGIN);
    //   })
    //   .catch(error => {
    //     console.log('errors from submit', error.message);
    //     setErrors({general: error.message});
    //   });
    console.log(data);

    navigation.navigate(routes.LOGIN);
  };

  return (
    <AppForm
      initialValues={{
        username: '',
        code: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={hanldeSubmit}>
      {() => {
        return (
          <>
            <FormField name="username" placeholder="Username" />
            <FormField name="code" placeholder="Code" />
            <FormField
              name="password"
              placeholder="New Password"
              secureTextEntry
            />
            <FormButton value="Submit" />
          </>
        );
      }}
    </AppForm>
  );
}
