import React from 'react';

import {useFormikContext} from 'formik';
import AppInput from './AppInput';
import ErrorMessage from './ErrorMessage';

export default function FormField({name, ...otherProps}) {
  const {handleChange, handleBlur, touched, errors, values} =
    useFormikContext();

  const error = errors[name];
  const touchedField = touched[name];
  return (
    <>
      <AppInput
        onBlur={handleBlur(name)}
        onChangeText={handleChange(name)}
        value={values[name]}
        {...otherProps}
      />
      {error && touchedField && <ErrorMessage error={error} />}
    </>
  );
}
