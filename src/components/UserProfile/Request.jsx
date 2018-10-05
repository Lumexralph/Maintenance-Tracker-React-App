import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Request = ({ data }) => {
  if (data.length > 0) {
    const requestCards = data.map(request => (
      <div key={request.request_id} className="request-card">
        <Link to={`/requests/${request.request_id}`}>
          <h3>{request.request_title}</h3>
          <section>{request.request_content}</section>
          <div>
            <span>{request.department}</span><span>{request.status}</span>
          </div>
        </Link>
      </div>
    ));

    return requestCards;
  }

  return (
    <div className="request-card">
      <p>No requests created yet, you can make a request!</p>
    </div>
  );
};

Request.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Request;
