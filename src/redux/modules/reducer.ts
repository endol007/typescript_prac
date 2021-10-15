import { CommentsState, CommentAction } from "./types";
import { createReducer } from "typesafe-actions";
import { ADD_COMMENT, TOGGLE_COMMENT, REMOVE_COMMENT } from './actions';

const initialState: CommentsState = [];

const comments = createReducer<CommentsState, CommentAction>(initialState, {
    [ADD_COMMENT]: (state, action) => state.concat({
        ...action.payload,
        done: false
    }),
    [TOGGLE_COMMENT]: (state, {payload: id}) =>
        state.map(comment => (comment.id === id ? { ...comment, done: !comment.done}: comment)),
    [REMOVE_COMMENT]: (state, {payload: id}) => 
        state.filter(todo => todo.id !== id)
});

export default comments;