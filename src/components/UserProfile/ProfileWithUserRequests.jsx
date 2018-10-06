import React from 'react';
import PropTypes from 'prop-types';

import requestHOC from '../HOC/userPage';

import Request from './Request';

const UserRequests = ({ requests }) => (
  <div>
    <Request data={requests} />
  </div>
);

UserRequests.propTypes = {
  requests: PropTypes.array.isRequired,
};

export default requestHOC(UserRequests);
