import React from 'react';

import SignupForm from './SignupForm';

const SignupFormContainer = ({
  onSubmit,
  onUsernameChange,
  onEmailChange,
  onPasswordChange,
  buttonStatus,
}) => (
  <main className="signup-container-img">
    <section className="signup-container">
      <SignupForm
        onSubmit={onSubmit}
        onUsernameChange={onUsernameChange}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        buttonStatus={buttonStatus}
      />
    </section>
  </main>
);

export default SignupFormContainer;
