import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ text }) => {
  const link = text.replace(/\s/g, '').toLowerCase();
  const routeLink = {
    home: '/',
    signup: '/signup',
    login: '/login',
    myrequests: '/profile',
    makearequest: '/request/create',
  };
  return (
    <li>
      <Link className="btn nav-btn nav-link" to={`${routeLink[link]}`}>{text}</Link>
    </li>
  );
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavLink;
