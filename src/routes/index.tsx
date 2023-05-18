import React, { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppContainer from 'container/AppContainer';
import MainContainer from '../container/MainContainer';
import routes from 'constants/routes';

const Home = lazy(() => import('pages/Home'));
const SB = lazy(() => import('pages/SB'));

const MainRoutes: FC = () => {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path={routes.SB} element={<AppContainer />}>
          <Route path='' element={<SB />} />
          <Route path='*' element={<SB />} />
        </Route>
        <Route path='/' element={<MainContainer />}>
          <Route path='' element={<Home />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
