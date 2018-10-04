import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderContainer from '../home/HeaderContainer';
import loadUserRequests from '../../actions/loadUserRequests';
import userRequests from '../../actions/userRequests';
import createUserRequest from '../../actions/createUserRequest';

const requestHOC = (WrappedComponent) => {
  class RequestComponent extends Component {
    state = {
      navLinks: ['Home', 'My Requests', 'Make A Request', 'Logout'],
    }

    componentDidMount() {
      const { getUserRequests, storeUserRequests } = this.props;
      getUserRequests()
        .then((response) => {
          const requests = response.data.message ? [] : response.data;
          storeUserRequests(requests);
        })
        .catch(error => error);
    }

    handleUserInput = (event) => {
      const { target } = event;
      const { name, value } = target;
      this.setState(previousState => ({
        ...previousState,
        message: null,
        request: {
          ...previousState.request,
          [name]: value,
        },
      }));
    }

    handleFormSubmit = (event) => {
      event.preventDefault();

      const { createRequest, history } = this.props;
      const { request } = this.state;

      createRequest(request)
        .then(() => {
          history.push('/profile');
        })
        .catch((error) => {
          const { response } = error;
          this.setState(previousState => ({
            ...previousState,
            message: response.data.message,
          }));
        });
    }

    render() {
      const { navLinks, message = null } = this.state;
      const { requests } = this.props;

      return (
        <div className="container">
          <HeaderContainer navText={navLinks} />
          <WrappedComponent
            requests={requests}
            onChange={this.handleUserInput}
            onSubmit={this.handleFormSubmit}
            message={message}
          />
        </div>
      );
    }
  }

  RequestComponent.propTypes = {
    getUserRequests: PropTypes.func.isRequired,
    storeUserRequests: PropTypes.func.isRequired,
    createRequest: PropTypes.func.isRequired,
    requests: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  const mapStateToProps = state => ({
    requests: state.userRequests,
  });

  const mapDispatchToProps = dispatch => ({
    getUserRequests: () => dispatch(loadUserRequests()),
    storeUserRequests: requests => dispatch(userRequests(requests)),
    createRequest: request => dispatch(createUserRequest(request)),
  });
  return connect(mapStateToProps,
    mapDispatchToProps)(RequestComponent);
};

export default requestHOC;
