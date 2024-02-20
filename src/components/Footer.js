import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thank you for exploring PitchPerfected! <br />
          Our goal is to enhance your experience in keeping up with your favorite teams. If you've found our platform valuable, consider sharing it with your football friends.
        </p>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              PitchPerfected <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>
            </Link>
          </div>
          <small className='website-rights'>PitchPerfected © 2024</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link Email'
              to='mailto:abdulsalehali10@gmail.com'
              target='_blank'
              aria-label='Email'
            >
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </Link>
            <Link
              className='social-icon-link LinkedIn'
              to='https://www.linkedin.com/in/abdulrahmansaleh10/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </Link>
            <Link
              className='social-icon-link Github'
              to='https://github.com/abdulsaleh10'
              target='_blank'
              aria-label='Github'
            >
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;