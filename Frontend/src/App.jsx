import React from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Body from './components/Body'
import MovieDialog from './components/MovieDialog.jsx'

function App() {


  return (
  <div>
  <Body/>
  <Toaster/>
  <MovieDialog/>

  </div>
  )
}

export default App
