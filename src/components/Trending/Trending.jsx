import axios from 'axios';
import { useEffect, useState } from 'react';

import MovieItem from '../MovieItem/MovieItem'
import scss from "./Trending.module.scss"

const API_KEY = "d6e689e53b61040192ebd16d8765557a"

const Tranding = () => {

    const[movies, setMovies] = useState([])

    useEffect(()=> {
        const fetchMovies = async () => {
  
            try {
              const response = await axios.get(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
              );
              setMovies(response.data.results);

            } catch (error) {
              console.error('Error fetching movies:', error);
            }
          };

          fetchMovies();
    }, [])

      
    return (

        <section className={scss.hero}>
            <h1 className={scss.heroTitle}>Tranding today</h1>
            <ul className={scss.unordered}>
                {movies.map(movie => (
                    <li className={scss.movieList} key={movie.id}>
                    <MovieItem id={movie.id} title={movie.title} img={movie.poster_path} />
                    </li>
                ))}
            </ul>
        </section>

    )
}

export default Tranding;