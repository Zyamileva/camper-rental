import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>...Loading page</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
