import React, { useState } from 'react'
import Header from './Header'
import bgImage from "/BgImage.jpg"
import axios from "axios"
import {API_END_POINT} from "../utils/constant.jsx"
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
import { getUser, setIsLoading } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'




const Login = () => {

  const [isLogin, setIslogin] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isLoading = useSelector((store)=> store.app.isLoading)

  const loginHandler =  ()=>{
    setIslogin(!isLogin)
  }


  

  const getInputData = async (e)=>{
    e.preventDefault()

    dispatch(setIsLoading(true))

    if(isLogin){

      // Login...


      const user = {email, password}

      try {
        const res = await axios.post(`${API_END_POINT}/login`, user,{
          headers : {
            "Content-Type" : 'application/json'
          }, withCredentials : true
        })

        if(res.data.success){
          toast.success(res.data.message)
        }
        
        dispatch(getUser(res.data.user))
        navigate("/browse")
      } 

      catch (error) {
        toast.error(error.response.data.message)
        console.log(error);  
      }

      finally{
        dispatch(setIsLoading(false))
      }

    }

    else{
      // Register...

      dispatch(setIsLoading(true))
      const user = {fullName, email, password}

      try {

        const res = await axios.post(`${API_END_POINT}/register`, user,{
          headers:{
            'Content-Type':'application/json'
        },
        withCredentials:true
        })

        if(res.data.success){
          toast.success(res.data.message)
        }

        setIslogin(true)
        
      } 
    
      catch (error) {
        toast.error(error.response.data.message)
        console.log(error)
      }
      finally{
        dispatch(setIsLoading(false))
      }

    }

    setFullName("")
    setEmail("")
    setPassword("")

    }





  return (
    <div className='w-full h-[100vh] relative' >
      <Header/>

      <img className='w-full h-full object-cover ' src={bgImage} alt="" />

      
      <form onSubmit={getInputData} className='w-[25%] h-fit p-14 flex flex-col rounded-lg bg-cyan-300 bg-opacity-70  absolute top-[50%] left-[50%] 
    translate-x-[-50%] translate-y-[-50%]'>
        <h1 className='text-center text-black text-3xl mb-3  font-black'> 
          
          {isLogin ? "Login" : "SignUp"}
          
        </h1>

        {!isLogin &&
       
        <input className=' p-2 mb-7 font-bold rounded-xl'

        onChange={(e)=> setFullName(e.target.value)} value={fullName}
        
        
        type="text" placeholder='FullName'   />

        }


        <input className='  mb-7 font-bold p-2 rounded-xl' 
        onChange={(e)=> setEmail(e.target.value)} value={email}
        
        type="email" placeholder='Email' />


        <input className=' p-2 mb-5  font-bold rounded-xl' 
        
        onChange={(e)=> setPassword(e.target.value)} value={password}
        type="password" placeholder='Password' />

        <button className='bg-red-600 p-2 text-white font-bold'> 
        
        {`${isLoading ? 'Loading...'    : (isLogin ? "Login" :  "Signup")}`}  </button>

        <p className='w-[120%]  text-md mt-1'

        onClick={loginHandler}
        
        
        >{isLogin ? 'New to Netflix?' :  'Already have an account?'}

         <span className=' cursor-pointer font-bold text-red-700'> 
         {!isLogin? 'Login' :'Signup'} </span>  
         
        </p>
      

     
      

      </form>
      


      
      
      </div>
  )
}

export default Login