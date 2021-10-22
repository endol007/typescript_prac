import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:4000/payload');
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postData = async (payload: {title: string, name: string, comment: string}) => {
  try {
    const response = await axios.post('http://localhost:4000/payload', payload);
    return response.data
  } catch (err) {
    console.log(err);
  }
};
