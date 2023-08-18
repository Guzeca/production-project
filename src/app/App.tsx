import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
