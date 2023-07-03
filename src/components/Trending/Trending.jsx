import PropTypes from 'prop-types';

import MovieMap from '../MovieMap/MovieMap';

import scss from "./Trending.module.scss"

const Tranding = ({movies}) => {
      
    return (

        <section className={scss.hero}>
            <h1 className={scss.heroTitle}>Tranding today</h1>
            <MovieMap movies={movies} />
        </section>
    )
}

Tranding.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired)
};

export default Tranding;