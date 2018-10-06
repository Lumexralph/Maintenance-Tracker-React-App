import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';
import HomePage from './home/HomePage';
import SignupPage from './Auth/SignupPage';
import LoginPage from './Auth/LoginPage';
import ProfileWithUserRequests from './UserProfile/ProfileWithUserRequests';
import ProfileWithRequestForm from './UserProfile/ProfileWithCreateEditRequest';
import SingleRequestPage from './UserProfile/SingleRequest';
import AdminDashBoard from './Admin/AdminDashBoard';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={ProfileWithUserRequests} />
        <Route path="/request/create" component={ProfileWithRequestForm} />
        <Route path="/request/edit" component={ProfileWithRequestForm} />
        <Route path="/requests/:id" component={SingleRequestPage} />
        <Route path="/admin" component={AdminDashBoard} />
      </Switch>
    </Router>
  </Provider>

);

export default App;
