import React from 'react';

const SignupForm = ({
  onSubmit,
  onUsernameChange,
  onEmailChange,
  onPasswordChange,
  buttonStatus,
}) => (
  <div className="right-part">
    <form onSubmit={event => onSubmit(event)}>
      <div className="container">
        <div className="popup">
          <span className="popuptext" id="myPopup" />
        </div>
        <label htmlFor="username" />
        <input
          onChange={event => onUsernameChange(event)}
          type="text"
          placeholder="pick a username"
          name="username"
          pattern="[a-zA-Z]+"
          title="Please, provide username with only letters."
          required
        />

        <label htmlFor="email" />
        <input
          onChange={event => onEmailChange(event)}
          type="email"
          placeholder="your email address"
          name="email"
          required
        />

        <label htmlFor="psw1" />
        <input
          onChange={event => onPasswordChange(event)}
          type="password"
          placeholder="create a password"
          name="psw1"
          minLength="8"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
          title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
          required
        />

        <label htmlFor="psw2" />
        <input
          onChange={event => onPasswordChange(event)}
          type="password"
          placeholder="confirm password"
          name="psw2"
          minLength="8"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
          title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
          required
        />
        <p>Use at least 1 uppercase, 1 lowercase character, and 1 number</p>

        <button
          className="btn signup-btn background-tertiary"
          type="submit"
          disabled={buttonStatus}
        >Sign up for FixZit
        </button>
      </div>
    </form>
  </div>
);

export default SignupForm;
