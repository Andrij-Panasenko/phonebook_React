import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle/>
    </>
  );
};
