import React from 'react';

import Loader from './Loader';

const ShowLoadingStatus = ({
  passwordMatch, loadingStatus, errorOnSignup, text,
}) => {
  let status;
  if (errorOnSignup === null && passwordMatch === null) {
    status = null;
  } else if (!passwordMatch || errorOnSignup) {
    status = false;
  } else {
    status = true;
  }

  switch (status) {
  case false:
    return (<p>{text}</p>);
  case true:
    return (<Loader type="bubbles" color="lightblue" />
    );
  default:
    return null;
  }
};

export default ShowLoadingStatus;
