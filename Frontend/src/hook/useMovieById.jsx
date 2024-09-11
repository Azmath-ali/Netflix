import axios from 'axios'
import  { useEffect } from 'react'
import { options } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { getTrailer } from '../redux/movieSlice'

const useMovieById = async (movieId) => {
    const dispatch = useDispatch()

    useEffect(()=>{

        const getMovieId = async ()=>{
            
            try {
                const res =  await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options)
                
                const trailer = res?.data?.results?.filter((val)=> {
                    return val.type === "Trailer"
                })
                
                dispatch(getTrailer(trailer.length > 0 ? trailer[0] : res.data.results[0]))
                
            } 
            catch (error) {
                console.log(error)
            }
        }
        getMovieId()
    },[])

   
}

export default useMovieById