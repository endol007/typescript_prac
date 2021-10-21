import { combineReducers } from "redux";
import boards from "./board/reducer";
import {createBrowserHistory} from "history";
import { connectRouter } from "connected-react-router";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    boards,
    router: connectRouter(history),
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>