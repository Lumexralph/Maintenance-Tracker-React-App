import React from 'react';

import LoginForm from './LoginForm';

const LoginFormContainer = ({
  onUsernameChange,
}) => (
  <main className="signup-container-img">
    <section className="signup-container">
      <LoginForm
        onUsernameChange={onUsernameChange}
      />
    </section>
  </main>
);

export default LoginFormContainer;
