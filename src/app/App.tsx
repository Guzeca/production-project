
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { classNames } from 'shared/lib/ClassNames/classNames';

import './styles/index.scss';

export const App = () => {

  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>

      <Navbar />
      <div className='content-page'>
        <SideBar />
        <AppRouter />
      </div>
      

    </div>
  )
}
