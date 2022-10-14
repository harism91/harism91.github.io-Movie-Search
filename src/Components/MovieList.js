import React, { useState } from 'react';
import MovieCard from './MovieCard'



const MovieList = () => {

    //State for SearchBar
    const [query, setQuery] = useState('');

    //State for Movie Info
    const [movieData, setMovieData] = useState([])


    const MovieList = async (event) => {
        event.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=a29a72c46fa17fa3fe5fcf7e58bfb531&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            if (query.length > 0) {

                const res = await fetch(url)
                const data = await res.json()
                setMovieData(data.results);
            }
            else {
                alert("Please enter a movie name")
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <form className='form' onSubmit={MovieList}>
                <label htmlFor='query' className='label'>Movie Name</label>
                <input type='text' name='query' className='input'
                    placeholder='i.e. Spiderman'
                    onChange={(event) => setQuery(event.target.value)}></input>

                <button type='submit' className='button'>Search</button>
            </form>
            <div className='card-list'>
                {movieData.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    )
}

export default MovieList