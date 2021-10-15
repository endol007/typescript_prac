import { combineReducers } from "redux";
import comments from './modules/index';
import github from './modules/github';
import {githubSaga} from './modules/github';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    comments,
    github
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([githubSaga()]);
}