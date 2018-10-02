import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderContainer from '../home/HeaderContainer';
import SignupFormContainer from './SignupFormContainer';
import FooterContainer from '../home/FooterContainer';
import errorOnSignupAction from '../../actions/signupError';
import passwordMatch from '../../actions/passwordMatch';
import loadingStatus from '../../actions/loadingStatus';
import registerUser from '../../actions/registerUser';
import setMessageAction from '../../actions/setMessage';
import ShowLoadingStatus from '../LoadingStatus';


class SignupPage extends Component {
  state = {
    navText: ['Home', 'Login'],
    username: '',
    email: '',
    password1: '',
    password2: '',
  }

  handleUsernameChange = (event) => {
    const { target } = event;
    this.setState({ username: target.value });
  }

  handleEmailChange = (event) => {
    const { target } = event;
    this.setState({ email: target.value });
  }

  handlePasswordChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    this.setState((previousState) => {
      let { password1, password2 } = previousState;

      if (name === 'psw1') {
        password1 = value;
        return { password1 };
      }

      password2 = value;
      return { password2 };
    });
  }

  handleSubmit = (event) => {
    const {
      password1, password2, username, email,
    } = this.state;

    const { onPasswordMatch, signupNewUser, setMessage } = this.props;
    // make a dispatch
    event.preventDefault();
    const result = (password1 === password2);

    if (result) {
      const user = {
        password1, password2, username, email,
      };

      onPasswordMatch(true);
      signupNewUser(user);
    } else {
      onPasswordMatch(false);
      setMessage('Passwords supplied do not match');
    }
  }

  render() {
    const { navText } = this.state;
    const {
      message, isLoading, doesPasswordMatch, errorOnSignup,
    } = this.props;

    return (
      <div className="container">
        {message === 'Signup successful' ? <Redirect to="/" /> : null}
        <HeaderContainer navText={navText} />
        <ShowLoadingStatus
          loadingStatus={isLoading}
          passwordMatch={doesPasswordMatch}
          errorOnSignup={errorOnSignup}
          text={message}
        />
        <SignupFormContainer
          onSubmit={this.handleSubmit}
          onUsernameChange={this.handleUsernameChange}
          onEmailChange={this.handleEmailChange}
          onPasswordChange={this.handlePasswordChange}
          buttonStatus={isLoading}
        />
        <FooterContainer />
      </div>
    );
  }
}

SignupPage.defaultProps = {
  message: '',
  doesPasswordMatch: null,
  errorOnSignup: null,
};

SignupPage.propTypes = {
  message: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  doesPasswordMatch: PropTypes.any,
  errorOnSignup: PropTypes.any,
  onPasswordMatch: PropTypes.func.isRequired,
  signupNewUser: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
};

// will receive the data of the sate from the store and
// pass it as props to the component
const mapStateToProps = state => ({
  currentUser: state.currentUser,
  errorOnSignup: state.errorOnSignup,
  isLoading: state.loadingStatus,
  doesPasswordMatch: state.passwordMatch,
  message: state.message,
});

// pass the objects to be used as props which will be used to dispatch to store
const mapDispatchToProps = dispatch => ({
  onSignupError: value => dispatch(errorOnSignupAction(value)),
  onPasswordMatch: value => dispatch(passwordMatch(value)),
  onLoading: value => dispatch(loadingStatus(value)),
  signupNewUser: user => dispatch(registerUser(user)),
  setMessage: message => dispatch(setMessageAction(message)),
});


const ConnectedSignupPage = connect(mapStateToProps,
  mapDispatchToProps)(SignupPage);


export default ConnectedSignupPage;
