// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentRegistrationForm from './StudentRegistrationForm';
import ThankYouPage from './ThankYouPage';
import ShowResponsePage from './ShowResponsePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/thank-you" component={ThankYouPage} />
        <Route path="/show-response" component={ShowResponsePage} />
        <Route path="/" component={StudentRegistrationForm} />
      </Switch>
    </Router>
  );
};

export default App;



