import './index.css';
import '../node_modules/modern-normalize/modern-normalize.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';

import App from './components/App/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
