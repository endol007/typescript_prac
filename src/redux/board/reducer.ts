import { ADD_BOARD_ASYNC, BOARD_RESPONSE } from "./types";
import { Action } from "./actions";

const initialState = {
    payload : [{id: 0, title: '제목', name: '작성자', comment: '내용'}]
}

const boards = (state = initialState, action: Action) => {
    const newState: any = {...state}
    switch(action.type){
        case BOARD_RESPONSE: // 6. receiveData로 스토어에 데이터 저장
            newState.payload = action.payload;
            return newState;
        case ADD_BOARD_ASYNC:
            newState.payload = 
            [...newState.payload, 
                {
                    title: action.payload.title, 
                    name: action.payload.name,
                    comment: action.payload.comment,
                    id: action.payload.id
                }]
            return newState;
        default:
            return state
    }
}

export default boards;