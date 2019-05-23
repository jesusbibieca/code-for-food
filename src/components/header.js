import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import Navbar from './navbar';
import config from '../utils/config';
import { relative } from 'path';

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
        <section
          class="hero is-medium"
          style={{
            backgroundColor: 'yellow',
            position: 'relative',
            bottom: '60px',
          }}
        >
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Hero title</h1>
              <h2 class="subtitle">Hero subtitle</h2>
            </div>
          </div>
        </section>
      </header>
    )}
  />
);

export default Header;
