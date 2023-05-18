import React, { FC } from 'react';
import JwalletLogo from '../icons/jwallet-logo';
import './index.scss';
import { Link } from 'react-router-dom';
import routes from 'constants/routes';

const SmallHeader: FC = () => {

  return (
    <div className='header-container small'>
      <div className='header-top'>
        <Link to={routes.HOME}>
          <JwalletLogo />
        </Link>
      </div>
    </div>
  );
};

export default SmallHeader;