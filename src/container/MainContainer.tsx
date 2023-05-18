import { SocialNetworks } from 'components/social-networks';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

const MainContainer: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainContainer;
