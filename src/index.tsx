import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from './redux';
import { rootSaga } from './redux/board/sagas';
import createSagaMiddleware from '@redux-saga/core';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);  // 2. 사가 실행

ReactDom.render(
    <Provider store={store}>
    <App />
    </Provider>,
document.getElementById('root')
);