import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';
import HomePage from './home/HomePage';
import SignupPage from './Auth/SignupPage';
import LoginPage from './Auth/LoginPage';
import ProfileWithUserRequests from './UserProfile/ProfileWithUserRequests';
import ProfileWithCreateRequest from './UserProfile/ProfileWithCreateRequest';
import SingleRequestPage from './UserProfile/SingleRequest';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={ProfileWithUserRequests} />
        <Route path="/request/create" component={ProfileWithCreateRequest} />
        <Route path="/request/edit" component={ProfileWithCreateRequest} />
        <Route path="/requests/:id" component={SingleRequestPage} />
      </Switch>
    </Router>
  </Provider>

);

export default App;
