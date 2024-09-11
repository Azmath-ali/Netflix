import { createSlice } from '@reduxjs/toolkit'




const searchSlice = createSlice({
  name: "movie",
  initialState : {
    movieName : null,
    searchedMovie : null,
    

  },

  reducers: {

    getMovieSearch : (state, action)=>{
        const {searchMovie, movies} = action.payload
        state.movieName = movies
        state.searchedMovie = searchMovie
    } 


   
  }
})

// Action creators are generated for each case reducer function
export const { getMovieSearch} = searchSlice.actions

export default searchSlice.reducer