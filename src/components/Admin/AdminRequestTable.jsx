import React from 'react';
import PropTypes from 'prop-types';

import AdminRequestTableContent from './AdminRequestTableContent';

const AdminRequestTable = ({ requests }) => (
  <section>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Request Id</th>
            <th>Status</th>
            <th>Request Title</th>
            <th>Action</th>
            <th>Resolved</th>
          </tr>
        </thead>
        <tbody>
          {<AdminRequestTableContent
            requests={requests}
          />}
        </tbody>
      </table>
    </div>
  </section>);

AdminRequestTable.propTypes = {
  requests: PropTypes.array.isRequired,
};

export default AdminRequestTable;
