import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import HeaderContainer from '../home/HeaderContainer';
import AdminPanel from './AdminPanel';
import AdminRequestTable from './AdminRequestTable';
import loadRequests from '../../actions/getAllRequests';
import userRequests from '../../actions/userRequests';


class AdminDashBoard extends Component {
  state = {
    navLinks: ['Home', 'Logout'],
  }

  componentDidMount() {
    const { loadAdminRequests, storeUserRequests } = this.props;

    loadAdminRequests()
      .then((response) => {
        const requests = response.data.message ? [] : response.data;
        storeUserRequests(requests);
      })
      .catch(error => error);
  }

  render() {
    const { navLinks } = this.state;
    const { requests } = this.props;
    return (
      <div className="container">
        <HeaderContainer navText={navLinks} />
        <main>
          <AdminPanel />
          <AdminRequestTable
            requests={requests}
          />
        </main>
      </div>
    );
  }
}

AdminDashBoard.propTypes = {
  requests: PropTypes.object.isRequired,
  loadAdminRequests: PropTypes.func.isRequired,
  storeUserRequests: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  requests: state.userRequests,
});

const mapDispatchToProps = dispatch => ({
  loadAdminRequests: () => dispatch(loadRequests()),
  storeUserRequests: requests => dispatch(userRequests(requests)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashBoard);
