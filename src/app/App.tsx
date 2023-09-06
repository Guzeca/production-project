import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { Suspense } from 'react';
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
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
