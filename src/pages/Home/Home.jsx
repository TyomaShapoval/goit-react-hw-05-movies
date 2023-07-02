import React from 'react';
import { lazy, Suspense } from 'react';
import { Triangle } from 'react-loader-spinner'

import Header from "../../components/Header/Header";
const Trending = lazy(() => import('../../components/Trending/Trending'));



const Home = () => {


    return (

        <React.Fragment>
            <Header />
            <Suspense fallback={<Triangle
                height="200"
                width="200"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />}>
                <Trending />
        </Suspense>
        </React.Fragment>

    )
}

export default Home;