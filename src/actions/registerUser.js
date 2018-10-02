import axiosInstance from '../helpers/apicall';

const registerNewUser = user => () => {
  const JSONData = JSON.stringify(user);

  return axiosInstance.post('/auth/signup', JSONData);
};

export default registerNewUser;
