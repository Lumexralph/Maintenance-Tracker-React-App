import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import requestHOC from '../HOC/requestHOC';

const SingleRequest = ({ request }) => (
  <div className="request-container">
    <h3>Title: {request.request_title}</h3>
    <h5>Request Details: {request.request_content}</h5>
    <p>Department: {request.department}</p>
    <p>Status: {request.status}</p>
    <div>
      <button className="btn" type="button">
        <Link to="/request/edit">Edit</Link>
      </button>
    </div>
  </div>
);

SingleRequest.propTypes = {
  request: PropTypes.object.isRequired,
};

const SingleRequestPage = requestHOC(SingleRequest);

export default SingleRequestPage;
