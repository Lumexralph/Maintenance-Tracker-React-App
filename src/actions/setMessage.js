import MESSAGE from '../constants/MESSAGE';

const setMessage = payload => ({
  type: MESSAGE,
  payload,
});

export default setMessage;
