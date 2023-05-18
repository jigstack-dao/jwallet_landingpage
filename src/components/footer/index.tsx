import React from 'react';
import './index.scss';

export default function Footer() {
  return (
    <footer>
      <div className='header'>
        <p>Jwallet © 2022 / All Rights Reserved.</p>
      </div>
      <ul>
        <li>
          <a href={process.env.REACT_APP_PRIVACY_NOTICE} target='_blank' rel='noopener noreferrer'>Privacy Notice</a>
        </li>
        <li>
          <a href={process.env.REACT_APP_COOKIE_POLICY} target='_blank' rel='noopener noreferrer'>Cookie Policy</a>
        </li>
        <li>
          <a href={process.env.REACT_APP_TERMS_OF_SERVICE} target='_blank' rel='noopener noreferrer'>Terms of Service</a>
        </li>
      </ul>
    </footer>
  );
}
