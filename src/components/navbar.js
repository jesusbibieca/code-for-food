import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './navbar.scss';

import Burger from './burger';

class Navbar extends Component {
  state = {
    active: false,
  };

  toogle = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { title, links } = this.props;
    const { active } = this.state;

    return (
      <nav
        className="navbar transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="logo is-uppercase">
            {title}
          </Link>
          <Burger onClick={this.toogle} isActive={active} />
        </div>

        <div className={`navbar-menu ${active ? 'is-active' : ''}`}>
          <div className="navbar-end">
            {links.map(link => (
              <Link to={link.slug} className="navbar-item" key={link.name}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array.isRequired,
};

Navbar.defaultProps = {
  title: ``,
};

export default Navbar;
