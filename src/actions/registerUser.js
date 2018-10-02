import axios from 'axios';

import storeUser from './index';
import signupError from './signupError';
import loadingStatus from './loadingStatus';
import passwordMatch from './passwordMatch';
import setMessage from './setMessage';

const registerNewUser = user => (dispatch) => {
  const userJSONData = JSON.stringify(user);
  // make async call with user details
  dispatch(signupError(false));
  dispatch(loadingStatus(true));

  return axios({
    method: 'post',
    url: 'https://maintenance-tracker-lumexralph.herokuapp.com/api/v1/auth/signup',
    data: userJSONData,
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      dispatch(storeUser(response.data));
      dispatch(setMessage('Signup successful'));
      dispatch(loadingStatus(false));
      dispatch(passwordMatch(null));
      dispatch(signupError(null));
      dispatch(setMessage(''));
    })
    .catch((error) => {
      const errorMessage = (!error.response) ? 'Please ensure you have internet connection' : error.response.data.message;
      dispatch(signupError(true));
      dispatch(loadingStatus(false));
      dispatch(setMessage(errorMessage));
      dispatch(passwordMatch(null));
      dispatch(loadingStatus(false));
      return errorMessage;
    });
};

export default registerNewUser;
