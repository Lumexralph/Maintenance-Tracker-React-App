import { combineReducers } from 'redux';

import currentUser from './currentUser';

const maintenanceTrackerApp = combineReducers({
  currentUser,
});

export default maintenanceTrackerApp;
