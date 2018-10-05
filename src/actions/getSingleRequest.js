import axiosInstance, { setAuthorizationInHeader } from '../helpers/apicall';
import getDataFromStorage from '../helpers/getDataFromStorage';

const loadUserRequests = id => () => {
  // retrieve token and set in header
  setAuthorizationInHeader(getDataFromStorage('token'));

  return axiosInstance.get(`/users/requests/${id}`);
};

export default loadUserRequests;
