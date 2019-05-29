import React from 'react';

const Footer = () => (
  <footer className="footer has-text-white">
    <div className="content">
      © {new Date().getFullYear()}, Built with
      <a href="https://www.gatsbyjs.org"> Gatsby</a>
    </div>
  </footer>
);

export default Footer;
