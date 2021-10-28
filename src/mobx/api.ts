import axios, { AxiosResponse } from 'axios';
import { boardData } from './boardMobx';

export const getBoardsData = async () => {
    try {
      const response: AxiosResponse<any, boardData[]> = await axios.get('http://localhost:4000/boards?_sort=id&_order=desc');
      return response.data;
    } catch (err) {
      console.log(err); 
    }
};

export const postBoardData = async (board: {title: string, comment: string, name: string}) => {
    try {
        const response: AxiosResponse<any, boardData> = await axios.post('http://localhost:4000/boards', board)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const updateBoardData = async (id: number, board: {title: string, comment: string, name: string}) => {
    try{
        const response: AxiosResponse<any, boardData> = await axios.put(`http://localhost:4000/boards/${id}`, board)
        return response.data
    } catch (err) {
        console.log(err);
    } 
}

export const deleteBoardData = async (id: number) => {
    try{
        await axios.delete(`http://localhost:4000/boards/${id}`);
    } catch (err) {
        console.log(err)
    }
}