import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import HeaderContainer from '../home/HeaderContainer';
import SignupFormContainer from './SignupFormContainer';
import FooterContainer from '../home/FooterContainer';
import errorOnSignup from '../../actions/signupError';
import passwordMatch from '../../actions/passwordMatch';
import loadingStatus from '../../actions/loadingStatus';
import registerUser from '../../actions/registerUser';
import setMessage from '../../actions/setMessage';
import ShowLoadingStatus from '../LoadingStatus';


class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navText: ['Home', 'Login'],
      username: '',
      email: '',
      password1: '',
      password2: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(event) {
    const { target } = event;
    this.setState({ username: target.value });
  }

  handleEmailChange(event) {
    const { target } = event;
    this.setState({ email: target.value });
  }

  handlePasswordChange(event) {
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

  handleSubmit(event) {
    const {
      password1, password2, username, email,
    } = this.state;

    const { onPasswordMatch, signupNewUser, setMessage} = this.props;
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
    const { message,isLoading, passwordMatch, errorOnSignup } = this.props;

    return (
      <div className="container">
        {message === 'Signup successful' ? <Redirect to="/" /> : null}
        <HeaderContainer navText={navText} />
        <ShowLoadingStatus
          loadingStatus={isLoading}
          passwordMatch={passwordMatch}
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

// will receive the data of the sate from the store and
// pass it as props to the component
const mapStateToProps = state => ({
  currentUser: state.currentUser,
  errorOnSignup: state.errorOnSignup,
  loadingStatus: state.loadingStatus,
  passwordMatch: state.passwordMatch,
  message: state.message,
});

// pass the objects to be used as props which will be used to dispatch to store
const mapDispatchToProps = dispatch => ({
  onSignupError: value => dispatch(errorOnSignup(value)),
  onPasswordMatch: value => dispatch(passwordMatch(value)),
  onLoading: value => dispatch(loadingStatus(value)),
  signupNewUser: user => dispatch(registerUser(user)),
  setMessage: message => dispatch(setMessage(message)),
});


const ConnectedSignupPage = connect(mapStateToProps,
  mapDispatchToProps)(SignupPage);


export default ConnectedSignupPage;
