import { CREATED_REQUEST } from '../constants';

const createdRequest = requests => ({
  type: CREATED_REQUEST,
  payload: requests,
});

export default createdRequest;
