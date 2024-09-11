import { createSlice } from '@reduxjs/toolkit'



const movieSlice = createSlice({
  name: "movie",
  initialState : {
    nowPlaying : null,
    popularMovie : null,
    topRated : null,
    upComing : null,
    search : false,
    trailer : null ,
    open : false,
    id : ""

  },

  reducers: {

    getNow_Playing :(state, action)=>{
        state.nowPlaying = action.payload
    },

    getPopularmovie : (state , action)=>{
      state.popularMovie = action.payload
    },

    getTopRated : (state , action)=>{
      state.topRated = action.payload
    },

    getUpComing : (state , action)=>{
      state.upComing = action.payload
    },

    getSearch : (state)=>{
      state.search = !state.search
    },

    getTrailer : (state, action)=>{
      state.trailer = action.payload
    },

    setOpen : (state, action)=>{
      state.open = action.payload
    },
    setId : (state, action)=>{
      state.id = action.payload
    }



   
  }
})

// Action creators are generated for each case reducer function
export const { getNow_Playing, getPopularmovie, getTopRated, getUpComing, getSearch, getTrailer,
   setOpen, setId } = movieSlice.actions

export default movieSlice.reducer