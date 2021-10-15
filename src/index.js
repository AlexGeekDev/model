import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserDataProvider} from './Context/userContext'
import {UiProvider} from './Context/uiContext'

ReactDOM.render(
  <React.StrictMode>
    <UserDataProvider>
      <UiProvider>
        <App />
      </UiProvider>
    </UserDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);