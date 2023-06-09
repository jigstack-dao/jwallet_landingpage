import React, { useMemo } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import ChromeIcon from '../icons/chrome';
import './index.scss';

export default function ButtonGetJwallet() {
  const { isDesktop } = useWindowSize();

  const link = useMemo(
    () =>
      isDesktop
        ? process.env.REACT_APP_CHROME_DESKTOP_LINK
        : process.env.REACT_APP_CHROME_MOBILE_LINK,
    [isDesktop]
  );

  return (
    <button className='btn-get-jwallet'>
      <a href={link}>
        <span className='icon'>
          <ChromeIcon />
        </span>
        <span className='text'>Download for Chrome</span>
      </a>
    </button>
  );
}
