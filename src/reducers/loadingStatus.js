const loadingStatus = (state = false, action) => {
  switch (action.type) {
  case 'SIGNUP_PROGRESS':
    return action.payload;
  default:
    return state;
  }
};

export default loadingStatus;
