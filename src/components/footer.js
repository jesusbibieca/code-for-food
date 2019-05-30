import React from 'react';

const Footer = () => (
  <footer className="footer has-text-white has-text-centered">
    <div className="content">
      © {new Date().getFullYear()}, Built with
      <a href="https://www.gatsbyjs.org"> Gatsby</a>
      <br />
      Crafted with ❤️by <em>Jesus Bibieca</em> from the DR 🇩🇴
    </div>
  </footer>
);

export default Footer;
