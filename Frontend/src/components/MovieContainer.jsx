import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'
import Variants from './Variants'

const MovieContainer = () => {

  const movie = useSelector((store)=> store.movie)
  // console.log(movie)

  return movie ? (
    <div className=' bg-black relative z-10'>
      <MovieList title={"Now Playing"} movies = {movie.nowPlaying}/>
      <MovieList title={"Popular Movies"} movies = {movie.popularMovie}/>
      <MovieList title={"Top_Rated Movies"}  movies = {movie.topRated}/>
      <MovieList title={"UpComing Movies"}  movies = {movie.upComing}/>


      
    </div>
  ):
  <Variants/>
}

export default MovieContainer