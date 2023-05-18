import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import ButtonBrowserGroup from '../button-browser-group';
import SliderCards from '../slider-cards';
import './index.scss';
import { Link } from 'react-router-dom';
import { SocialNetworks } from 'components/social-networks';

const INTEGRATIONS = [
  {
    icon: (
      <div className='integration-icon'>
        <img src='/images/lifi.png' alt='lifi' />
      </div>
    ),
    link: '/s&b',
    external: false
  },
  {
    icon: (
      <div className='integration-icon'>
        <img src='/images/santa.png' alt='santa' />
      </div>
    ),
    link: 'https://wallet.jigstack.org/gifts',
    external: true
  }
];

export default function Main() {
  const { isDesktop } = useWindowSize();
  return (
    <div className='main-container'>
      <div className='main-typography'>
        <div className='question'>What is Jwallet?</div>
        <div className='text'>
          Jwallet is an extension wallet that allows you to connect to the blockchain, in just a few
          clicks you can create your own crypto wallet, and start buying and storing your own
          cryptocurrencies, swap them and send them to whomever you want via a fully decentralized
          tool, as well as participate in the launches of new DeFi projects. Do you like NFTs? If
          yes, you will be happy to discover that with Jwallet you can view your NFTs directly from
          your account.
        </div>
      </div>
      <SliderCards isDesktop={isDesktop} />

      <div className='integration'>
        <div className='integration-header'>jWallet integration</div>
        <div className='integrations'>
          {INTEGRATIONS.map((item, key) =>
            item.external ? (
              <a href={item.link || '#'} key={key}>
                {item.icon}
              </a>
            ) : (
              <Link to={item.link || '#'} key={key}>
                {item.icon}
              </Link>
            )
          )}
        </div>
      </div>

      <ButtonBrowserGroup isDesktop={isDesktop} />
      <SocialNetworks />
    </div>
  );
}
