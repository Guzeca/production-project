import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App testClassName='test-class' disabled>
      BUTTON_TEST_TEXT
    </App>
  </React.StrictMode>
);
