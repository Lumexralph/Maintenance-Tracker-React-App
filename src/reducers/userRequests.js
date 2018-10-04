const userRequests = (state = [], action) => {
  switch (action.type) {
  case 'USER_REQUESTS':
    return [...state,
      ...action.payload];
  default:
    return state;
  }
};

export default userRequests;
