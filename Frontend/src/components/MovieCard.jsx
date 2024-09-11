import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setId, setOpen } from '../redux/movieSlice'

const MovieCard = ({image, movieId}) => {
  
  const dispatch = useDispatch()
  
  if(image === null) return null

  const handleOpen = ()=>{

    dispatch(setId(movieId))

    dispatch(setOpen(true))
  }




  return (

    <div onClick={handleOpen} className='w-48'>
        <img src={`https://image.tmdb.org/t/p/original/${image}`} alt="" />
        
    </div>
  )
}

export default MovieCard