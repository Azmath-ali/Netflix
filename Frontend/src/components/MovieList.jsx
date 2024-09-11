import React from 'react'
import MovieCard from './MovieCard.jsx'

const MovieList = ({title, movies, searchMovie=false}) => {
  return (
    <div className='px-2 mb-4  '>
        <h1 className={`${searchMovie ? "text-black" : "text-white"} text-3xl mb-2  `}>{title}</h1>

        <div className='flex overflow-x-auto no-scrollbar cursor-pointer  '>
                <div className='flex items-center gap-3'>
                    {
                       movies && movies.map((val,index) => { 
                            
                            return (
                                <MovieCard key={index} movieId = {val.id} image={val.poster_path || val.backdrop_path} />
                            )
                        })
                    }


                </div>
        </div>

    </div>
  )
}

export default MovieList