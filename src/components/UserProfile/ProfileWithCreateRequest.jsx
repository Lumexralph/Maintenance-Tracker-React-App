import React from 'react';
import PropTypes from 'prop-types';

import requestHOC from '../HOC/requestHOC';

const CreateRequestForm = ({ onChange, onSubmit, message }) => (
  <div id="request-modal" className="modal">

    <div className="modal-content">
      <div className="modal-header">
        <h2>FixZit</h2>
      </div>
      <div className="modal-body">
        <h3>Create a request</h3>
        <div>
          {message ? <p id="formPopup">{message}</p> : ''}
        </div>
        <form
          onSubmit={onSubmit}
        >

          <label htmlFor="title">
            <input
              onChange={e => onChange(e)}
              type="text"
              id="request-title"
              name="title"
              placeholder="Your request title.."
              required
            />
          </label>

          <label htmlFor="dept">
          Department
            <select
              name="department"
              onChange={e => onChange(e)}
              id="dept"
            >
              <option value="maintenance">Maintenance</option>
              <option value="Repairs">Repairs</option>
            </select>
          </label>


          <label htmlFor="content">
            <textarea
              onChange={e => onChange(e)}
              id="subject"
              name="content"
              placeholder="Tell us about your request.."
              style={{ height: '200px' }}
              required
            />
          </label>


          <input id="sendRequest" className="btn btn-send" type="submit" value="Send Request" />

        </form>
      </div>
    </div>

  </div>
);

CreateRequestForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

const ProfileWithCreateRequest = requestHOC(CreateRequestForm);

export default ProfileWithCreateRequest;
