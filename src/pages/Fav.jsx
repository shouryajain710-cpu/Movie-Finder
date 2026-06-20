import React from 'react'
import Moviecard from '../components/Moviecard'
import './Fav.css'
const Fav = ({fav}) => {
  return (
    <div className='fav_div_1'>
      <div className='fav_div_2'>
        {
          fav.map((movie) =>(
            <Moviecard 
              key={movie.id}
              movie={movie}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Fav
