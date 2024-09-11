import React from 'react'
import useMovieById from '../hook/useMovieById'
import {useSelector} from 'react-redux'
import Variants from "./Variants"


const VideoBackground = ({movieId, bool}) => {

  
  const trailer = useSelector((store) => store.movie.trailer)


  useMovieById(movieId)


  return trailer ? (
    <div className='w-[vw] h-[90vh]  overflow-hidden'>
        <iframe  className={`${bool ? "w-[100%]" : "w-full h-full  object-cover aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailer?.key}?si=wk0_lLAwUMUVpDx8&autoplay=1&mute=1`}
        title="YouTube video player" frameBorder="0" allow=" allowFullScreen">

        </iframe>
        
    </div>
  ) : <Variants/>
}

export default VideoBackground