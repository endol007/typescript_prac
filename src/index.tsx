import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import createStore from './redux';

const store = createStore();

ReactDom.render(
    <Provider store={store}>
    <App />
    </Provider>,
document.getElementById('root'),
);
