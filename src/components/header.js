import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import Navbar from './navbar';
import Hero from './hero'
import config from '../utils/config';

const Header = ({path}) => (
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
        <Hero />
      </header>
    )}
  />
);

export default Header;
