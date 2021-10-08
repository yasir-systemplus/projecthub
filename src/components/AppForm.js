import React from 'react';
import {Formik} from 'formik';
import ErrorMessage from './ErrorMessage';

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
      {({errors, ...all}) => {
        return (
          <>
            {children({errors, ...all})}
            {errors.general && <ErrorMessage error={errors.general} />}
          </>
        );
      }}
    </Formik>
  );
}
