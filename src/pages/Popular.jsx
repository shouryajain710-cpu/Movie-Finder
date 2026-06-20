import React from 'react'
import { useState , useEffect } from 'react'
import Moviecard from '../components/Moviecard'
import './Popular.css'

const Popular = () => {
 

  const [loading , setLoading] = useState(false)
  const [movies , setMovies] = useState([]) 

  const trendingMovies = async() =>{
        setLoading(true)

        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day`,
            {
                headers:{
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
                }
            }
        )
        const data = await response.json()
        setMovies(data.results)

        setLoading(false)
    }

  useEffect(() => {
    trendingMovies()
  } , [])
 
  return (
    <div className='popular_div_1'>
      {movies.map((movie)=>(
        <Moviecard 
        key={movie.id}
        movie={movie}
      />
      ))} 
    </div>
  )
}

export default Popular
