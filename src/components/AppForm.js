import React from 'react';
import {View, Text} from 'react-native';
import {Form, Formik} from 'formik';

/**
 * AppForm
 * Built with FaCC Pattern
 *
 */

export default function AppForm({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {formProps => children(formProps)}
    </Formik>
  );
}
