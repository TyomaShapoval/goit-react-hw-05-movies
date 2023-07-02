import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

import Header from "../Header/Header";
import scss from "./MovieDetails.module.scss"
import Cast from "./../Cast/Cast";
import Reviews from './../Reviews/Reviews';

import Notiflix from 'notiflix';
import axios from 'axios';

const MovieItem = () => {
    const baseURL = 'https://api.themoviedb.org';
    const API_KEY = "d6e689e53b61040192ebd16d8765557a";
    const { movieId } = useParams();
    const location = useLocation();
    const [selectedMovie, setSelectedMovie] = useState({});

    useEffect(() => {

    const fetchSelectedMovie = async (movieId) => {

        try {
          const getRes = await axios.get(
              `${baseURL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
              );
  
            setSelectedMovie(getRes.data);

        } catch (error) {
          Notiflix.Notify.failure(error.message);
        }
      };

      fetchSelectedMovie(movieId);
  }, [movieId]);

    const posterUrl = selectedMovie.poster_path
    ? `https://image.tmdb.org/t/p/w400/${selectedMovie.poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

    const { title, release_date, vote_average, overview, genres } =
    selectedMovie;

    const releaseDate = new Date(release_date);

    const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

    const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();
    

    return (
      <React.Fragment>
        <Header />
          <section className={scss.details}>
        <Link className={scss.back} to={location?.state?.from ?? '/'}>
        </Link>
          <div className={scss.detailsContainer}>
          <img style={{
                width: "300px"
            }} src={posterUrl} alt='POSTER'/>
            <div className={scss.textContent}>
            <h2>{title ?? 'Unknown'} ({releaseYear})</h2>
            <p>User Score: {userScore}</p>
            <h3>Overview:</h3>
            <p>{overview === '' ? 'Unknown' : overview}</p>
            
            {genres && genres.length > 0 && (
            <React.Fragment>
                <h3>Genres:</h3>
                <p>{genres.map(genre => genre.name).join(', ')}</p> 
             </React.Fragment>
          )}
            </div>
          </div>
        </section>
        <div className={scss.btnCon}>
        <Link className={scss.btnMore} to="cast" state={{ from: location?.state?.from ?? '/' }}>Cast</Link>
        <Link className={scss.btnMore} to="reviews" state={{ from: location?.state?.from ?? '/' }}>Reviews</Link>
        </div>
        <section>
          {location.pathname === `/movies/${movieId}/cast` ? <Cast /> : null}
          {location.pathname === `/movies/${movieId}/reviews` ? <Reviews /> : null}
        </section>
        
      </React.Fragment>
    )
}

export default MovieItem