import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';

import 'stylesheet/bootstrap.scss';
import 'stylesheet/fontface.scss';

import App from 'containers/App';
import appReducer from 'containers/App/reducer';

const store = createStore(
  appReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
