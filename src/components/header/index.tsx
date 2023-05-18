import useWindowSize from '../../hooks/useWindowSize';
import React from 'react';
import ButtonGetJwallet from '../button-get-jwallet';
import JigstackLogoIcon from '../icons/jgstack-logo';
import JwalletLogo from '../icons/jwallet-logo';
import LogoHeaderIcon from '../icons/logo-header';
import LogoHeaderDesktopIcon from '../icons/logo-header-desktop';
import VectorGrHeaderIcon from '../icons/vector-gr-header';
import VectorGrHeaderDesktopIcon from '../icons/vector-gr-header-desktop';
import './index.scss';
import { Link } from 'react-router-dom';
import routes from 'constants/routes';

export default function Header() {
  const { isDesktop } = useWindowSize();

  return (
    <div className='header-container'>
      <div className='header-top'>
        <Link to={routes.HOME}>
          <JwalletLogo />
        </Link>
      </div>
      <div className='header-content'>
        <div className='header-images right'>
          <div className='vectors'>
            {isDesktop ? <VectorGrHeaderDesktopIcon /> : <VectorGrHeaderIcon />}
          </div>
          <div className='logo'>{isDesktop ? <LogoHeaderDesktopIcon /> : <LogoHeaderIcon />}</div>
        </div>
        <div className='left'>
          <div className='header-typography'>
            <div className='big'>
              <p>
                <span>Jwallet </span>
                <span className='white'>browser</span>
              </p>
              <p>
                <span>extension </span>
                <span className='white'>wallet</span>
              </p>
            </div>
            <div className='small no-stick'>
              <p>
                A crypto wallet to connect with the blockchain world. Connect to the blockchain,
                buy, send, swap, participate in new DeFi projects and look at your NFTs from the
                same wallet
              </p>
            </div>
          </div>
          <div className='header-btn'>
            <ButtonGetJwallet />
          </div>
          <div className='header-bottom'>
            <span className='text'>Governed by</span>
            <span className='icon'>
              <JigstackLogoIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
