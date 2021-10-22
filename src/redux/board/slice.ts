import { createSlice } from "@reduxjs/toolkit";
import { boardState } from "./types";

const initialState: boardState = {
    loading: false,
    data: [],
    error: null
}

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        getBoards: (state) => {
            state.loading = true;
        },
        getBoardsSuccess: (state, { payload }) => {
            state.data = payload;
            state.loading = false;
        },
        getBoardsError: (state, {payload}) => {
            state.error = payload;
            state.loading = false;
        },
        sendBoards: (state, payload) => {
            state.loading = true;
        },
        sendBoardsSuccess: (state, { payload }) => {
            state.data = [...state.data, payload]
            state.loading = false;
        },
        sendBoardsError: (state, { payload }) => {
            state.error = payload;
            state.loading = false;
        }
    }
})

export const boardDataActions = boardSlice.actions;
export default boardSlice;  