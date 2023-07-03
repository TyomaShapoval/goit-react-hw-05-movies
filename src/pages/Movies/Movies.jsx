import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Notiflix from 'notiflix';
import Searchbar from "../../components/Searchbar/Searchbar";
import {fetchMovieByName} from '../../sevices/api'

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
  

useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      try {
        const getRes = await fetchMovieByName(query);
            const results = getRes.results;

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
        <React.Fragment>
            <Searchbar movies={movies} handleSubmit={handleSubmit} />
        </React.Fragment>
    )
}

export default Movies;