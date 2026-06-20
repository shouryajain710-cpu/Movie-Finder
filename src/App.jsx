import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Homepage from './pages/Homepage'
import { Route , Routes } from 'react-router-dom'
import Fav from './pages/Fav'
import Popular from './pages/Popular'


const App = () => {

  const [fav , setFav] = useState([])

  const addFav = (movie) => {
    const exist = fav.some(favmovie => (favmovie.id === movie.id))

    if (!exist) {
      setFav(prev => [...prev , movie])  
    }
  }
  useEffect(() => {
    console.log(fav)
  } , [fav])

  return (
    <div className='app_div_1'>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<Homepage addFav={addFav} />}/>
        <Route path='/Fav' element={<Fav fav={fav}/>}/>
        <Route path='/Popular' element={<Popular/>}/>
        
      </Routes>
    </div>
  )
}

export default App
