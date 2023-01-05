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
import { baseName } from './utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={`/${baseName}`} element={<Authorization />} />
          <Route
            path={`/${baseName}/registration`}
            element={<Registration />}
          />
          <Route
            path={`/${baseName}/confirmEmail`}
            element={<ConfirmEmail />}
          />
          <Route path={`/${baseName}/noLetter`} element={<NoLetter />} />
          <Route
            path={`/${baseName}/passwordRetrieval`}
            element={<PasswordRetrieval />}
          />

          <Route path="/livedune/successfully" element={<LetterSended />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
