import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import SmallHeader from 'components/header/SmallHeader';
import { SocialNetworks } from 'components/social-networks';

const AppContainer: FC = () => {
  return (
    <>
      <SmallHeader />
      <Outlet />
      <SocialNetworks />
      <Footer />
    </>
  );
};

export default AppContainer;
