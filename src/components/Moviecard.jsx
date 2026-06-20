import React from 'react'
import './Moviecard.css'
import { useState } from 'react'
import noimg from '../assets/noimg.png'


const Moviecard = ({movie , addFav}) => {
  
  const [imageError , setImageError] = useState(false)

  const image = movie.poster_path
  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  : null

  return (
    <div>
            <div className='Moviecard_div_2'>

              {image && !imageError ? (
                <img 
                  src={image} 
                  alt={movie.title} 
                  onError={() => setImageError(true)}
                />):
                (<div className='Moviecard_div_3'>
                  <img src={noimg} alt="" />
                </div>)}
            
                <h2>{movie.title}</h2>
                <p>{movie.release_date?.split('-')[0]}</p>
                {addFav && (
                  <button onClick={() => addFav(movie)}>
                  Add to fav
                  </button>
                )}
            </div>
        
    </div>
  )
}

export default Moviecard
