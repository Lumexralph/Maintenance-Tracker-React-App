const createdRequest = (state = {}, action) => {
  switch (action.type) {
  case 'CREATED_REQUEST':
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default createdRequest;
