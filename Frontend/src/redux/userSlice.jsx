import { createSlice } from '@reduxjs/toolkit'



const userSlice = createSlice({
  name: "user",
  initialState : {
    user : null,
    isLoading : false
  },

  reducers: {

    getUser :(state, action)=>{
        state.user = action.payload
    },

    setIsLoading : (state, action)=>{
      state.isLoading = action.payload
    }
   
  }
})

// Action creators are generated for each case reducer function
export const { getUser, setIsLoading } = userSlice.actions

export default userSlice.reducer