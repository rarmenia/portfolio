import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import AppRoot from './AppRoot';
import './index.css';
import {allReducers} from './redux';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoot />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();