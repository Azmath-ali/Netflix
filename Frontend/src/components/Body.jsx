import React from 'react'
import Login from './Login.jsx'
import Browse from './Browse.jsx'
import Header from './Header.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SearchMovie from './SearchMovie.jsx'


const Body = () => {
    const router  = createBrowserRouter([
        {
          path : '/',
          element : <Login/>
        },
      
        {
          path : '/browse',
          element : <Browse/>
        },
        {
          path : '/header',
          element : <Header/>
        },
        { path : '/search',
        element : <SearchMovie/>
      },
      {
        path: "*",
        element: <h1>Page not found</h1>
      }
      ])
      
      
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Body