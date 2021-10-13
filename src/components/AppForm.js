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
  ...otherProps
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...otherProps}>
      {({errors, touched, ...props}) => {
        return (
          <>
            {children({errors, touched, ...props})}
            {errors.general && <ErrorMessage error={errors.general} />}
          </>
        );
      }}
    </Formik>
  );
}
