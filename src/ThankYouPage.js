// ThankYouPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => (
  <div>
    <h1>Thank You for Submitting!</h1>
    <p>We appreciate your registration.</p>
    <Link to="/show-response">Show My Response</Link>
  </div>
);

export default ThankYouPage;

