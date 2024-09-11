
import axios from 'axios'
import { getPopularmovie } from '../redux/movieSlice'
import {  Popular_Movie, options } from '../utils/constant'
import { useDispatch } from 'react-redux'

const usePopularMovie = async () => {
    const dispatch  = useDispatch()
    try {
        const res = await axios.get(Popular_Movie, options)
        // console.log(res.data.results)
        dispatch(getPopularmovie(res.data.results))
    } 
    catch (error) {
        console.log(error);    
    }
  

}


export default usePopularMovie