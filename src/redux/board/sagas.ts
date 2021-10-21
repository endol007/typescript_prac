import { all, put, call, takeEvery, takeLatest } from "redux-saga/effects";
import { receiveData } from "./actions";
import fetchData from "./api";
import axios from "axios";
import { ADD_BOARD, ADD_BOARD_ASYNC, BOARD_REQUEST, BOARD_RESPONSE } from "./types";

function* addBoardAsync(payload: {id: number, title: string, name: string, comment: string}) {
    try{
        yield axios.post(`http://localhost:4000/payload`, payload)
        yield put({ type: ADD_BOARD_ASYNC, payload})
    }catch(err){
        console.log(err);
    }
}

function* getApiData() {
    try {
        const data = yield call(fetchData); //4. fetchData => api요청하는 함수 실행
        yield put(receiveData(data)); //5. call으로 받아온 data로 receiveData함수 실행
    }catch (err) {
        console.log(err);
    }
}

function* watchAddBoard() {
    yield takeLatest<any>(ADD_BOARD, addBoardAsync);
}

function* watchgetApiData() {
    yield takeLatest(BOARD_REQUEST, getApiData); // 3. BOARD_REQUEST로 getApiData실행
}

export function* rootSaga() {
    yield all([watchAddBoard(), watchgetApiData()]);
}