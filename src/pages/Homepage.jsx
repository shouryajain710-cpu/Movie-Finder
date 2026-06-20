import React from 'react'
import './Homepage.css'
import Searchbar from '../components/Searchbar'
import Moviecard from '../components/Moviecard'
import { useState , useEffect } from 'react'


const Homepage = ({addFav}) => {
  

    const [search , setSearch] = useState('')
    const[movies , setMovies] = useState([])
    const [loading , setLoading] = useState(false)


    const fetchMovies = async () => {
        const response = await fetch(
            'https://api.themoviedb.org/3/movie/popular',
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
                }
            }
        )
        const data = await response.json()
        setMovies(data.results)
    }

    const searchMovies = async() =>{
        setLoading(true)

        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${search}`,
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
        console.log(import.meta.env.VITE_TMDB_TOKEN)
        fetchMovies()
    },[])

    const filteredMovies = movies.filter((movie) => 
        movie.title.toLowerCase().includes(search.toLowerCase())
    )
  
    return (
    <div className='Homepage_div_0'>
        <Searchbar 
            search={search}
            setSearch={setSearch}
            searchMovies={searchMovies}
        />
        <div className='Homepage_div_1'>
            {loading ? (<h2>Loading...</h2>) :( 
            <div className='Homepage_div_2'>
                {filteredMovies.map((movie) => (
                <Moviecard 
                    key={movie.id}
                    movie={movie}
                    addFav={addFav}
                />
            ))
            }
            </div>)}
        </div>
    </div>
  )
}

export default Homepage
