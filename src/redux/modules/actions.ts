import { deprecated } from "typesafe-actions";
const { createAction, createStandardAction } = deprecated;

export const ADD_COMMENT = 'comments/ADD_COMMENT';
export const TOGGLE_COMMENT = 'comments/TOGGLE_COMMENT';
export const REMOVE_COMMENT = 'comments/REMOVE_COMMENT';

let nextId: number = 1;

export const addComment = createAction(ADD_COMMENT, action => (text: string) =>
    action({
        id: nextId++,
        text
    })
);
export const toggleComment = createStandardAction(TOGGLE_COMMENT)<number>();
export const removeComment = createStandardAction(REMOVE_COMMENT)<number>();