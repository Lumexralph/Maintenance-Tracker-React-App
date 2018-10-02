import SIGNUP_ERROR from '../constants/SIGNUP_ERROR';

const signupError = payload => ({
  type: SIGNUP_ERROR,
  payload,
});


export default signupError;
