const passwordMatch = (state = null, action) => {
  switch (action.type) {
  case 'PASSWORD_MATCH':
    return action.payload;
  default:
    return state;
  }
};

export default passwordMatch;
