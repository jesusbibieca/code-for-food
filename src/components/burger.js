import React from 'react';
import PropTypes from 'prop-types';
import './burger.scss';

const Burger = ({ onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`navbar-burger white ${isActive ? 'is-active' : ''}`}
    aria-label="menu"
    aria-expanded="false"
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </button>
);

Burger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

Burger.defaultProps = {
  isActive: false,
};

export default Burger;
