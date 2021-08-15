import React from 'react';
import { Formik, Form, Field } from 'formik';

function UserForm () {
  const initialUserValues = {
    name: '',
    telNumber: '',
    isBanned: false,
  };
  const submitHandler = (values, formikBag) => {
    // addUser(valus)
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
      {formikProps => {
        <Form>
          <Field name='name' />
          <Field name='telNumber' />
          <Field name='isBanned' />
          <button type='submit'>Add</button>
        </Form>;
      }}
    </Formik>
  );
}

export default UserForm;
