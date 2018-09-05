import SIGNUP_PROGRESS from '../constants/SIGNUP_PROGRESS';

const signupProgress = payload => ({
  type: SIGNUP_PROGRESS,
  payload,
});

export default signupProgress;
