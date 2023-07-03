import PropTypes from 'prop-types';

import MovieMap from '../MovieMap/MovieMap';

import styles from './Searchbar.module.scss';

const Searchbar = ({movies, handleSubmit}) => {

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
      <MovieMap movies={movies} />
    </section>
  );
};

Searchbar.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired),
  handleSubmit: PropTypes.func.isRequired,
};

export default Searchbar;