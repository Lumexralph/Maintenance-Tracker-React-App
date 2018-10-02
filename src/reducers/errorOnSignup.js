const errorOnSignup = (state = null, action) => {
  switch (action.type) {
  case 'SIGNUP_ERROR':
    // return { ...state, errorOnSignup: action.payload };
    return action.payload;
  default:
    return state;
  }
};

export default errorOnSignup;
