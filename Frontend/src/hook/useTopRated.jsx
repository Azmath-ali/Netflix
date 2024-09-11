import axios from 'axios'
import {  getTopRated } from '../redux/movieSlice'
import { Top_Rated, options } from '../utils/constant'
import { useDispatch } from 'react-redux'


const useTopRated = async () => {
    const dispatch  = useDispatch()
    try {
        const res = await axios.get(Top_Rated, options)
        // console.log(res.data.results)
        dispatch(getTopRated(res.data.results))
    } 
    catch (error) {
        console.log(error);    
    }
  

}

export default useTopRated