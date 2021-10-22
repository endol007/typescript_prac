import { boardDataActions } from './slice';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { fetchData, postData } from './api';

type data = {
    type: string,
    payload: {
      title: string,
      name: string,
      comment: string
    },
    id: number
}
function* getBoards(){
    try{
        const data: data = yield fetchData()
        yield put(boardDataActions.getBoardsSuccess(data));
    } catch (err) {
        yield put(boardDataActions.getBoardsError(err));
    }
}

function* sendBoards(payload: {title: string, name: string, comment: string}) {
    try {
      const response: data = yield postData(payload);
      yield put(boardDataActions.sendBoardsSuccess(response));
    } catch (err) {
      yield put(boardDataActions.sendBoardsError(err));
    }
  }

function* watchgetBoards() {
    yield takeLatest(boardDataActions.getBoards, getBoards);
}

function* watchsendBoards() {
    yield takeLatest(boardDataActions.sendBoards, sendBoards)
}
export function* rootSaga() {
    yield all([watchgetBoards(), watchsendBoards()]);
}
