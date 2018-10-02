import axiosInstance from '../helpers/apicall';

const loginUser = user => () => {
  const userLoginDetails = JSON.stringify(user);

  return axiosInstance.post('/auth/login', userLoginDetails);
};

export default loginUser;
