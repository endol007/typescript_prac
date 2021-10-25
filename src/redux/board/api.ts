import axios, { AxiosResponse } from 'axios';
import { boardType } from './types';

export const fetchData = async () => {
  try {
    const response: AxiosResponse<unknown, boardType[]> = await axios.get('http://localhost:4000/payload');
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postData = async (payload: {title: string, name: string, comment: string}) => {
  try {
    const response: AxiosResponse<unknown, boardType> = await axios.post('http://localhost:4000/payload', payload );
    return response.data
  } catch (err) {
    console.log(err);
  }
};
