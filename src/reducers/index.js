import { combineReducers } from 'redux';

import currentUser from './currentUser';
import errorOnSignup from './errorOnSignup';
import passwordMatch from './passwordMatch';
import loadingStatus from './loadingStatus';
import message from './setMessage';

const maintenanceTrackerApp = combineReducers({
  currentUser,
  errorOnSignup,
  passwordMatch,
  loadingStatus,
  message,
});

export default maintenanceTrackerApp;
