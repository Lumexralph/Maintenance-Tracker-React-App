import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderContainer from '../home/HeaderContainer';
import FooterContainer from '../home/FooterContainer';
import LoginFormContainer from './LoginFormContainer';
import loginUser from '../../actions/loginUser';
import currentUser from '../../actions/currentUser';
import ShowLoadingStatus from '../LoadingStatus';
import updateStorageData from '../../helpers/updateStorageData';

class LoginPage extends Component {
  state = {
    navText: ['Home', 'Signup'],
    username: '',
    password: '',
    isLoading: false,
    message: null,
  }

  handleUsernameChange = (event) => {
    const { target } = event;
    this.setState({ username: target.value });
  }

  handlePasswordInput = (event) => {
    const { target } = event;
    this.setState({ password: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { login, setCurrentUser } = this.props;
    const { username, password } = this.state;

    this.setState({ isLoading: true });
    login({ username, password })
      .then((response) => {
        setCurrentUser(response.data);
        updateStorageData('token', response.data.token);
        this.setState({
          message: 'login successful',
          isLoading: false,
        });
      })
      .catch((error) => {
        const errorMessage = (!error.response) ? 'Please ensure you have internet connection' : error.response.data.message;

        this.setState({
          isLoading: false,
          message: errorMessage,
        });

        return errorMessage;
      });
  }

  render() {
    const { navText, message, isLoading } = this.state;
    return (
      <div className="container">
        {message === 'login successful' ? <Redirect to="/profile" /> : null}
        <HeaderContainer navText={navText} />
        <ShowLoadingStatus
          status={isLoading}
          text={message}
        />
        <LoginFormContainer
          onUsernameChange={this.handleUsernameChange}
          onPasswordInput={this.handlePasswordInput}
          onSubmit={this.handleSubmit}
        />
        <FooterContainer />
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginUser(user)),
  setCurrentUser: user => dispatch(currentUser(user)),
});


export default connect(null, mapDispatchToProps)(LoginPage);
