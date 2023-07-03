import scss from "../Trending/Trending.module.scss";
import MovieItem from '../MovieItem/MovieItem';

const MovieMap = ({movies}) => {

    return (

            <ul className={scss.unordered}>
                {movies.map(movie => (
                    <li className={scss.movieList} key={movie.id}>
                      <MovieItem id={movie.id} title={movie.title} img={movie.poster_path} />
                    </li>
                ))}
            </ul>
    )
}

export default MovieMap;