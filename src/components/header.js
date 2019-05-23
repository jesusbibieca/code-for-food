import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import Navbar from './navbar';
import config from '../utils/config';

const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({ site: { siteMetadata } }) => (
      <header>
        <Navbar title={siteMetadata.title} links={config.navbarLinks} />
      </header>
    )}
  />
);

export default Header;
