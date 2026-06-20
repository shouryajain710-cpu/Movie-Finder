import React from 'react'
import './Searchbar.css'


const Searchbar = ({search , setSearch , searchMovies}) => {

    return (
    <div>
        <div className='homepage_div_1'>
            <input type="text" placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={searchMovies}>Search</button>
        </div>
    </div>
  )
}

export default Searchbar
