import React from 'react'
import logo from "/logo.png"
import { IoMdArrowDropdown } from "react-icons/io";
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_END_POINT } from '../utils/constant';
import toast  from 'react-hot-toast';
import { getUser } from '../redux/userSlice';
import { getSearch } from '../redux/movieSlice';





const Header = () => {

  const user = useSelector((store)=> store.app.user)
  const search = useSelector((store) => store.movie.search)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const logoutHandler = async ()=>{
    try {
      const res = await axios.get(`${API_END_POINT}/logout`)
      if(res.data.success){
        toast.success(res.data.message)
      }
      dispatch(getUser(null))
      navigate("/")
    } 
    catch (error) {
      console.log(error);  
    }
  }


  // Search Movie...

  const searchMovie = ()=>{

    dispatch(getSearch())


  }



  return (
    <div className=' absolute w-full p-4 flex items-center justify-between bg-gradient-to-b from-black'>
      <img className='w-36' src={logo} alt="" />


    {user &&

      <div className='flex items-center gap-10'>
      <div className='font-bold text-xl flex items-center'>

       <IoMdArrowDropdown color='white'/>
       <h1 className='text-white'> {user.fullName.toUpperCase()} </h1>
         
      </div>

      <div className='flex gap-4'>
        <button onClick={logoutHandler}
         className='bg-red-800 text-white px-3 rounded-lg'>Logout</button>
         
        <button onClick={searchMovie}
        className='bg-red-800 text-white px-3 py-1 rounded-lg'> {search ? "Home" : "Search Movie"} 
         </button>
      </div>

      </div>
      
      }
      


    </div>
  )
}

export default Header