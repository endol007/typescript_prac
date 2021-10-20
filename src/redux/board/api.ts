import axios from "axios";

const fetchData =  async () => {
    try{
    const response = await axios.get(`http://localhost:4000/payload`)
    return response.data
    }
    catch (err){
        console.log(err);
    }
}
export default fetchData;

export const sendData = async (payload: {id: number, title: string, name: string, comment: string}) => {
    try{
        const response = await axios.post(`http://localhost:4000/payload`, payload)
        return response.data
    }catch (err){
        console.log(err);
    }
}