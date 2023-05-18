import { SOCIAL_NETWORKS } from 'constants/social-networks';
import React, { FC } from 'react';
import './style.scss'

export const SocialNetworks: FC = () => {
  return (
    <div className='social-networks'>
      <ul>
        {SOCIAL_NETWORKS.map((item, key) => (
          <li key={key} className='social-networks-item'>
            <a href={item.link || '#'} target='_blank' rel='noopener noreferrer'>
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
