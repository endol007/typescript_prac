import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './board/sagastk';
import boardSlice from './board/slice';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  board: boardSlice.reducer,
  router: connectRouter(history),
});

const createStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: [sagaMiddleware]
    });
    sagaMiddleware.run(rootSaga);
    return store;
}

export default createStore;

export type RootState = ReturnType<typeof rootReducer>
