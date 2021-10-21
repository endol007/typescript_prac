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