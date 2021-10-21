import { ADD_BOARD, BOARD_REQUEST, BOARD_RESPONSE } from './types';

export const addBoard = (id: number, title: string, name: string, comment: string) => ({
  type: ADD_BOARD, id, title, name, comment,
});

export const requestData = () => ({ type: BOARD_REQUEST });

export const receiveData = (payload: {title: string, comment: string, name: string}) => ({ type: BOARD_RESPONSE, payload });

export type Action =
| ReturnType<typeof addBoard>
| ReturnType<typeof receiveData>
