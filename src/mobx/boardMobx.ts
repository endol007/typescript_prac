import { observable } from 'mobx';
import axios from 'axios';
import { 
    deleteBoardData,
    getBoardsData, postBoardData, updateBoardData
} from './api';


export interface boardData {
    id: number;
    name: string;
    title: string;
    comment: string;
}
  
type Todo = {
    board: boardData[];
    getBoard: () => void;
    postBoard: (boards: {title: string, comment: string, name: string}) => void;
    deleteBoard: (id: number) => void;
    updateBoard: (id: number, board: {title: string, comment: string, name: string}) => void;
}

export const boardMobx = observable<Todo>({
    board: [],

    getBoard() {
        getBoardsData().then(response => {
            const data = response.map((item: boardData) => {
                return item;
            })
            this.board = [...data];
        }).catch((err: any) => {
            console.log(err)
        })
    },

    postBoard(boards) {
        postBoardData(boards).then(response => {
            this.board.unshift(response)
        }).catch(err => {
            console.log(err);
        })
    },
    
    deleteBoard(id) {
        deleteBoardData(id)
    },

    updateBoard(id, board) {
        updateBoardData(id, board).then(response => {
            const index = this.board.findIndex((p) => p.id === id);
            this.board[index] = response;
        }).catch(err => {
            console.log(err);
        })
    }
});