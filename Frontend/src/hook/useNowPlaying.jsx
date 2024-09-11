import axios from 'axios'
import { getNow_Playing } from '../redux/movieSlice'
import { Now_Playing, options } from '../utils/constant'
import { useDispatch } from 'react-redux'

const useNowPlaying = async () => {
    const dispatch  = useDispatch()
    try {
        const res = await axios.get(Now_Playing, options)
        // console.log(res.data.results)
        dispatch(getNow_Playing(res.data.results))
    } 
    catch (error) {
        console.log(error);    
    }
  

}

export default useNowPlaying