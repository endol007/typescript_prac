import { ADD_BOARD, ADD_BOARD_ASYNC, BOARD_REQUEST, BOARD_RESPONSE } from "./types";
import { addBoard, receiveData } from "./actions";

const initialState = {
    payload : [{id: 0, title: '제목', name: '작성자', comment: '내용'}]
}

type Action = 
    | ReturnType<typeof addBoard>
    | ReturnType<typeof receiveData>

const boards = (state = initialState, action: Action) => {
    const newState: any = {...state}
    switch(action.type){
        case BOARD_RESPONSE:
            newState.payload = action.payload;
            return newState;
        case ADD_BOARD:
            console.log(action);
            newState.payload = 
            [...newState.payload, 
                {
                    title: action.title, 
                    name: action.name,
                    comment: action.comment,
                    id: action.id
                }]
            return newState;
        default:
            return state
    }
}

export default boards;