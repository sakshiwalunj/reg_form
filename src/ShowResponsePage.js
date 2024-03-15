// ShowResponsePage.js
import React from 'react';
import { connect } from 'react-redux';
import { selectFormValues } from './formSlice';

const ShowResponsePage = ({ formValues }) => (
  <div>
    <h1>Your Response</h1>
    <p>First Name: {formValues.firstName}</p>
    <p>Last Name: {formValues.lastName}</p>
    <p>Email: {formValues.email}</p>
    <p>Phone: {formValues.phone}</p>
    <p>Address: {formValues.address}</p>
    <p>Date of Birth: {formValues.dateOfBirth}</p>
  </div>
);

const mapStateToProps = (state) => ({
  formValues: selectFormValues(state),
});

export default connect(mapStateToProps)(ShowResponsePage);
