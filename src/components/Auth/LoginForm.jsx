import React from 'react';

const LoginForm = ({
  onUsernameChange,
}) => (
  <div className="right-part">
    <form action="" method="post">
      <div className="container">
        <div className="popup">
          <span className="popuptext" id="myPopup">Ensure the information are correct..</span>
        </div>
        <label htmlFor="uname" />
        <input type="text" placeholder="enter your username" name="uname" required />
        <label htmlFor="psw" />
        <input type="password" placeholder="enter your password" name="psw" required />
        <p>Welcome back, ready to serve you when you're in</p>

        <button id="loginButton" className="btn signup-btn background-tertiary" type="submit">Login to FixZit</button>

        <label className="remember-box">
              <input type="checkbox" checked="checked" name="remember" /> Remember me
        </label>
            <span className="psw">

            </span>

      </div>

    </form>
  </div>
);

export default LoginForm;
