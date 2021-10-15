import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CommentAction = ActionType<typeof actions>;

export type Comment = {
    id: number;
    text: string;
    done: boolean;
};

export type CommentsState = Comment[];