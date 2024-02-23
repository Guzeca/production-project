import React from 'react';
import {createRoot} from 'react-dom/client';
import {hydrate} from "react-dom";
import {Provider} from 'react-redux';
import {store} from './stores/store';
import App from './components/app/App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './styles/index.scss';

const router = createBrowserRouter([
    {
        path: "/:?",
        element: <App />,
        //errorElement: <ErrorPage />,
    },
]);

let rootElement = document.getElementById("root");
const root = createRoot(rootElement);
if (rootElement.hasChildNodes()) {
    hydrate(
        <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </React.StrictMode>,
        rootElement
    );
} else {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </React.StrictMode>,
    );
}