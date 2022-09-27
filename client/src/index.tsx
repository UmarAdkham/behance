import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from "./App";
import { store } from './redux/store';
import './style/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// sdfskl
root.render(
  <Provider store={store} >
    <App />
  </Provider>

);
