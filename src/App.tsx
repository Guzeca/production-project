import { Route, Routes, Link } from 'react-router-dom'
import { Suspense } from 'react'

import { MainPage } from './Pages/MainPage/MainPage'
import { AboutPage } from './Pages/AboutPage/AboutPage'
import { useTheme } from './theme/useTheme'

import { classNames } from './helper/ClassNames'

import './styles/index.scss'

export const App = () => {

  const { theme, toggleTheme } = useTheme();

  return ( 
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная страница</Link>
      <Link to={'/About'}>О странице</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/About'} element={<AboutPage />} />
        </Routes>
      </Suspense>
        
    </div>
  )
}
