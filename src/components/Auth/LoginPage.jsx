import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderContainer from '../home/HeaderContainer';
import FooterContainer from '../home/FooterContainer';
import LoginFormContainer from './LoginFormContainer';

class LoginPage extends Component {
  state = {
    navText: ['Home', 'Signup'],
    username: '',
    password: '',
  }

  handleUsernameChange = (event) => {
    const { target } = event;
    this.setState({ username: target.value });
    console.log(target.value);
  }

  render() {
    const { navText } = this.state;
    return (
      <div className="container">
        <HeaderContainer navText={navText} />
        <LoginFormContainer 
        onUsernameChang={this.handleUsernameChange}
        />
        <FooterContainer />
      </div>
    );
  }
}

export default LoginPage;
