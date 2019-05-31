import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import config from '../utils/config';
import './socialLinks.scss';

const ORDERED_ICONS = [
  faGithub,
  faLinkedin,
  faTwitter,
  faEnvelopeOpen,
  faInstagram,
];

class SocialLinks extends Component {
  getLinkElements(links) {
    return links.map((link, i) => (
      <a
        key={link.label}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon">
          <FontAwesomeIcon icon={ORDERED_ICONS[i]} />
        </span>
        <br />
        {link.label}
      </a>
    ));
  }
  render() {
    const { userLinks } = config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements(userLinks)}</div>;
  }
}

export default SocialLinks;
