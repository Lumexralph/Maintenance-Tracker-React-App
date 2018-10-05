import React from 'react';
import PropTypes from 'prop-types';

const AdminRequestTableContent = ({ requests }) => {
  if (requests.length) {
    const RowsOfRequests = requests.map(request => (
      <tr key={Number(request.request_id)}>
        <td className="request-id">{request.request_id}</td>
        <td>{request.status}</td>
        <td>
          <p className="request-title">{request.request_title}</p>
        </td>
        <td>
          <button type="button" className="admin-table-btn accept-btn" disabled>accept</button>
          <button type="button" className="admin-table-btn reject-btn" disabled>reject</button>
        </td>
        <td>
          <button type="button" className="resolve-btn" disabled>resolve</button>
        </td>
      </tr>
    ));

    return RowsOfRequests;
  }
  return (<p>No Requests Yet...</p>);
};

AdminRequestTableContent.propTypes = {
  requests: PropTypes.array.isRequired,
};

export default AdminRequestTableContent;
