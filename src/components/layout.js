import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import './layout.scss';

const Layout = ({ children }) => (
  <div className="is-fixed-top top-workaround">
    <Header />
    <div className="container">
      <main>{children}</main>
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
