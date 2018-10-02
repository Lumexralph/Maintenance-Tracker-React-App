import PASSWORD_MATCH from '../constants/PASSWORD_MATCH';

const passwordMatch = payload => ({
  type: PASSWORD_MATCH,
  payload,
});

export default passwordMatch;
