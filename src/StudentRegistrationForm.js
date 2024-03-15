// StudentRegistrationForm.js
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFormValues } from './formSlice';

const StudentRegistrationForm = ({ history, setFormValues }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      setFormValues(values);
      history.push('/thank-you');
    }, 400);
  };

  return (
    <div>
      <h1>Student Registration Form</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          dateOfBirth: ''
        }}
        validate={values => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = 'First name is required';
          } else if (values.firstName.length > 50) {
            errors.firstName = 'First name must be 50 characters or less';
          }
          if (!values.lastName) {
            errors.lastName = 'Last name is required';
          } else if (values.lastName.length > 50) {
            errors.lastName = 'Last name must be 50 characters or less';
          }
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.phone) {
            errors.phone = 'Phone number is required';
          } else if (!/^\d{10}$/i.test(values.phone)) {
            errors.phone = 'Invalid phone number';
          }
          if (!values.address) {
            errors.address = 'Address is required';
          }
          if (!values.dateOfBirth) {
            errors.dateOfBirth = 'Date of birth is required';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component="div" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <Field type="text" name="address" />
              <ErrorMessage name="address" component="div" />
            </div>
            <div>
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <Field type="date" name="dateOfBirth" />
              <ErrorMessage name="dateOfBirth" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFormValues: (values) => dispatch(setFormValues(values)),
});

export default withRouter(connect(null, mapDispatchToProps)(StudentRegistrationForm));
