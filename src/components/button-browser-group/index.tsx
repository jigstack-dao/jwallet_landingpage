import React, { useEffect, useState } from 'react';
import ButtonBrowser from '../button-browser';
import BraveIcon from '../icons/brave';
import ChromeIcon from '../icons/chrome';
import FireFoxIcon from '../icons/firefox';
import MultiDotLeft from '../icons/multi-dot-left';
import MultiDotLeftDesktopIcon from '../icons/multi-dot-left-desktop';
import MultiDotRight from '../icons/multi-dot-right';
import MultiDotRightDesktopIcon from '../icons/multi-dot-right-desktop';
import './index.scss';

const ButtonBrowserGroup: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
  const [links, setLinks] = useState<(string | undefined)[]>([]);

  useEffect(() => {
    if (isDesktop) {
      setLinks([
        process.env.REACT_APP_CHROME_DESKTOP_LINK,
        process.env.REACT_APP_BRAVE_DESKTOP_LINK,
        process.env.REACT_APP_FIREFOX_DESKTOP_LINK
      ]);
    } else {
      setLinks([
        process.env.REACT_APP_CHROME_MOBILE_LINK,
        process.env.REACT_APP_BRAVE_MOBILE_LINK,
        process.env.REACT_APP_FIREFOX_MOBILE_LINK
      ]);
    }
  }, [isDesktop]);
  return (
    <div className='btn-browser-gr'>
      <div className='header'>Supported browsers</div>
      <div className='main'>
        <div className='multi-dot-right'>
          {isDesktop ? <MultiDotRightDesktopIcon /> : <MultiDotRight />}
        </div>
        <div className='btns'>
          <div className='link-gg'>
            <ButtonBrowser
              text='Download for Chrome'
              to={"https://chrome.google.com/webstore/search/jwallet?hl=en-GB&authuser=0"}
              icon={<ChromeIcon width={62} height={62} />}
            />
          </div>
          <div>
            <ButtonBrowser text='Dowload for Brave' to={"https://chrome.google.com/webstore/search/jwallet?hl=en-GB&authuser=0"} icon={<BraveIcon />} />
          </div>
          <div>
            <ButtonBrowser text='Coming…' to={""} disabled={true} icon={<FireFoxIcon />} />
          </div>
        </div>
        <div className='multi-dot-left'>
          {isDesktop ? <MultiDotLeftDesktopIcon /> : <MultiDotLeft />}
        </div>
      </div>
    </div>
  );
};

export default ButtonBrowserGroup;
