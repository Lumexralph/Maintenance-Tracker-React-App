import React from 'react';

const AdminPanel = () => (
  <section className="admin-container">
    <nav className="admin-panel-1 background-tertiary text-primary admin-panel-1-text">
      <p>Admin Panel</p>
      <p>Welcome, Admin <span id="displayAdminUser" /></p>
      <p>
        <label htmlFor="filter-by">Filter Requests</label>
        <select id="filter-by" name="filter-by">
          <option value="none">none</option>
          <option value="approved">approved</option>
          <option value="pending">pending</option>
          <option value="rejected">rejected</option>
          <option value="resolved">resolved</option>
        </select>
      </p>
    </nav>
  </section>
);

export default AdminPanel;
