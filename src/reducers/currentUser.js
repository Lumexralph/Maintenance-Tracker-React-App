const currentUser = (state = {}, action) => {
  switch (action.type) {
  case 'SIGNUP_USER':
    return action.payload;
  default:
    return state;
  }
};

export default currentUser;
