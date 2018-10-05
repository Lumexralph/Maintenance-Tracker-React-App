import axiosInstance, { setAuthorizationInHeader } from '../helpers/apicall';
import getDataFromStorage from '../helpers/getDataFromStorage';

const loadAdminRequests = () => () => {
  // retrieve token and set in header
  setAuthorizationInHeader(getDataFromStorage('token'));

  return axiosInstance.get('/requests');
};

export default loadAdminRequests;
