import React from 'react';
import PropTypes from 'prop-types';

import Loader from './Loader';

const ShowLoadingStatus = ({
  status,
  text,
}) => {
  if (status) {
    return (<Loader type="bubbles" color="lightblue" />);
  }
  if (text) {
    return (<p>{text}</p>);
  }
  return null;
};

ShowLoadingStatus.defaultProps = {
  text: null,
};

ShowLoadingStatus.propTypes = {
  status: PropTypes.bool.isRequired,
  text: PropTypes.any,
};

export default ShowLoadingStatus;
