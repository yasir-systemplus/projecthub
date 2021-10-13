import React from 'react';
import {useFormikContext} from 'formik';
import AppButton from './AppButton';

export default function FormButton(props) {
  const {handleSubmit} = useFormikContext();
  return <AppButton onPress={handleSubmit} {...props} />;
}
