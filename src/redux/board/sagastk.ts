import { boardDataActions } from './slice';
import { put, takeLatest, all } from 'redux-saga/effects';
import { fetchData, postData } from './api';
import { boardType } from './types';

function* getBoards(){
    try{
        const data: boardType = yield fetchData()
        yield put(boardDataActions.getBoardsSuccess(data));
    } catch (err) {
        yield put(boardDataActions.getBoardsError(err));
    }
}

function* sendBoards(payload: {title: string, name: string, comment: string}) {
    try {
      const response: boardType = yield postData(payload);
      yield put(boardDataActions.sendBoardsSuccess(response));
    } catch (err) {
      yield put(boardDataActions.sendBoardsError(err));
    }
  }

function* watchgetBoards() {
    yield takeLatest(boardDataActions.getBoards, getBoards);
}

function* watchsendBoards() {
    yield takeLatest<any>(boardDataActions.sendBoards, sendBoards)
}
export function* rootSaga() {
    yield all([watchgetBoards(), watchsendBoards()]);
}
