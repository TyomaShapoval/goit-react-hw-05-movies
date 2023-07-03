import React, { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { Triangle } from 'react-loader-spinner'
import {fetchTrendMovies} from '../../sevices/api'

const Trending = lazy(() => import('../../components/Trending/Trending'));



const Home = () => {

    const[movies, setMovies] = useState([])

    useEffect(()=> {
        const fetchMovies = async () => {
  
            try {
              const response = await fetchTrendMovies();
              setMovies(response.results);

            } catch (error) {
              console.error('Error fetching movies:', error);
            }
          };

          fetchMovies();
    }, [])

    return (

        <React.Fragment>
            <Suspense fallback={<Triangle
                height="200"
                width="200"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />}>
                <Trending movies={movies} />
        </Suspense>
        </React.Fragment>

    )
}

export default Home;