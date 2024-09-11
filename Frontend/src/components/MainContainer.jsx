import React from 'react'
import VideoBackground from './VideoBackground'
// import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import Variants from './Variants'

const MainContainer = () => {
  const movie = useSelector((store)=> store.movie?.nowPlaying)
  if(!movie) return

  const {overview,id, title} = movie[4]

  return movie ? (
    <div>
        {/* <VideoTitle overview = {overview} title = {title} /> */}
        <VideoBackground movieId = {id} />
        
    </div>
  ) :
  <Variants/>
}

export default MainContainer