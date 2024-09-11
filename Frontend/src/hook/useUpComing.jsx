import axios from 'axios'
import { getUpComing } from '../redux/movieSlice'
import { Up_Coming, options } from '../utils/constant'
import { useDispatch } from 'react-redux'


const useUpComing = async () => {
    const dispatch  =  useDispatch()
    try {
        const res = await axios.get(Up_Coming, options)
        // console.log(res.data.results)
        dispatch(getUpComing(res.data.results))
    } 
    catch (error) {
        console.log(error);    
    }
  

}


export default useUpComing