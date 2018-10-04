import React from 'react';

import requestHOC from '../HOC/requestHOC';

import Request from './Request';

const UserRequests = ({ requests }) => (
  <div>
    <Request data={requests} />
  </div>
);

export default requestHOC(UserRequests);
