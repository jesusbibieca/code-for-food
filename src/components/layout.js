import React from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';

import Header from './header';
import './layout.scss';

const Layout = ({ children }) => (
  <Location>
    {({ location }) => (
      <div className="is-fixed-top top-workaround">
        <Header path={location} />
        <div className="container">
          <main>{children}</main>
        </div>
        <footer className="footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )}
  </Location>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
