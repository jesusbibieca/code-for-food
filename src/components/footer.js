import React from 'react';
import SocialLinks from './socialLinks';
import './footer.scss';

const Footer = () => (
  <footer className="footer has-text-white has-text-centered">
    <div className="content">
      <SocialLinks /> © {new Date().getFullYear()}, Built with
      <a href="https://www.gatsbyjs.org"> Gatsby</a>
      <br />
      Crafted with ❤️by <em>Jesus Bibieca</em> from the DR 🇩🇴
    </div>
  </footer>
);

export default Footer;
