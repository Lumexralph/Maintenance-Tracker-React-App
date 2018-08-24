import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ text }) => (
  <li>
    <Link className="btn nav-btn nav-link" to={`/${text.toLowerCase()}`}>{text}</Link>
  </li>
);

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavLink;
