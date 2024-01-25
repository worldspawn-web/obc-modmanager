import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import './main.scss';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Theme appearance="dark">
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
