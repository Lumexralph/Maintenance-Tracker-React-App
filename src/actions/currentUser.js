import NEW_USER from '../constants/NEW_USER';

const signupUser = user => ({
  type: NEW_USER,
  payload: user,
});

export default signupUser;
