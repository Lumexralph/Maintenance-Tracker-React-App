import { combineReducers } from 'redux';

import currentUser from './currentUser';
import userRequests from './userRequests';

const maintenanceTrackerApp = combineReducers({
  currentUser,
  userRequests,
});

export default maintenanceTrackerApp;
