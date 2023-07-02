import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import scss from "./MovieItem.module.scss"

const MovieItem = ({id, title, img}) => {

    const location = useLocation();

    const posterUrl = img
    ? `https://image.tmdb.org/t/p/w400/${img}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';
    

    return (
            <Link to={`/movies/${id}`} state={{ from: location }}>
            <img style={{
                width: "300px"
            }} src={posterUrl} alt='POSTER'/>
            <p className={scss.titleText}>{title}</p>
        </Link>
    )
}

MovieItem.propTypes = {
      // title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      img: PropTypes.string,
      title: PropTypes.string,
  };

export default MovieItem