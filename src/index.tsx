import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import { Authorization } from './components/Authorization';
import { Registration } from './components/Registration';
import { ConfirmEmail } from './pages/ConfirmEmail/ConfirmEmail';
import { LetterSended } from './pages/LetterSended';
import { NoLetter } from './pages/NoLetter';
import { PasswordRetrieval } from './pages/PasswordRetrieval';
import store from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authorization />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/confirmEmail" element={<ConfirmEmail />} />
          <Route path="/noLetter" element={<NoLetter />} />
          <Route path="/passwordRetrieval" element={<PasswordRetrieval />} />
          <Route path="/successfully" element={<LetterSended />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
