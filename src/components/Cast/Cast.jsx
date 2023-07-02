import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastHeader,
  CastInfo,
  CastList,
  CastListItem,
  CastName,
  NoCastText,
  Wrapper,
} from '../Cast/Cast.styled';
import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';
const API_KEY = "d6e689e53b61040192ebd16d8765557a";

const Cast = () => {
  const { movieId } = useParams(); 
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await axios.get(
            `${baseURL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
          );
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <Wrapper>
      <CastHeader>Cast</CastHeader> {/* додаємо заголовок */}

      {/* додаємо перевірку на наявність акторів */}
      {cast.length ? (
        <CastList>
          {cast.map(actor => (
            <CastListItem className="cast-card" key={actor.id}>

              {/* додаємо перевірку на наявність фото */}
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}

              {/* додаємо інформацію про актора */}
              <CastInfo>
                <CastName>{actor.name}</CastName>
                <p>Character: {actor.character}</p>
              </CastInfo>
            </CastListItem>
          ))}
        </CastList>
      ) : (
        <NoCastText>
          We don't have any information about the cast yet.
        </NoCastText>
      )}
    </Wrapper>
  );
};

export default Cast;
