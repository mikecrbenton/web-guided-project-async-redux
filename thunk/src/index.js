import React from 'react';
import ReactDOM from 'react-dom';
import { logger } from 'redux-logger'

// REDUX
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import App from './App';

import { appReducer } from './reducers';

const store = createStore(appReducer, applyMiddleware(logger, thunk) );

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
