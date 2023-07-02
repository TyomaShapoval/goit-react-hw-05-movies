// Searchbar.js
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Notiflix from 'notiflix';
import axios from 'axios';

import MovieItem from '../MovieItem/MovieItem'

import styles from './Searchbar.module.scss';
import scss from '../Trending/Trending.module.scss'

const API_KEY = "d6e689e53b61040192ebd16d8765557a"

const Searchbar = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
  

useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      try {
        const getRes = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
            );
            const results = getRes.data.results

        if (results.length === 0) {
          Notiflix.Notify.warning('No movies found');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        Notiflix.Notify.failure(error.message);
        setMovies([]);
      }
    };


    getMovie();
  }, [searchParams]);

  const handleSubmit = (e) => {
    const query = e.target.elements.query.value;
    e.preventDefault();
    if (!query) {
        Notiflix.Notify.failure('Please enter something');
        return;
      };
    setSearchParams( {query} );
    e.target.reset();
  };

  return (
    <section className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          className={styles.input}
          name='query'
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </form>
      <ul className={scss.unordered}>
                {movies.map(movie => (
                    <li className={scss.movieList} key={movie.id}>
                    <MovieItem id={movie.id} title={movie.title} img={movie.poster_path} />
                    </li>
                ))}
            </ul>
    </section>
  );
};

export default Searchbar;