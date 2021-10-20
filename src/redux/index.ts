import { combineReducers } from "redux";
import boards from "./board/reducer";

const rootReducer = combineReducers({
    boards
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>