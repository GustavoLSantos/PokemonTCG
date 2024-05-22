import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Routers from './routes';

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
    <Routers />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);
