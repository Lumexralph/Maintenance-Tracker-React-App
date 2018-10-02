import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';
import HomePage from './home/HomePage';
import SignupPage from './Auth/SignupPage';
import LoginPage from './Auth/LoginPage';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  </Provider>

);

export default App;
