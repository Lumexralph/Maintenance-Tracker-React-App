const setMessage = (state = '', action) => {
  switch (action.type) {
  case 'MESSAGE':
    return action.payload;
  default:
    return state;
  }
};

export default setMessage;
