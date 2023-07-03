import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { Triangle } from 'react-loader-spinner';
import SharedLayout from "./SharedLayout/SharedLayot";

import Home from "../pages/Home/Home";

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (
    <div>
    <Suspense fallback={<Triangle
  height="200"
  width="200"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>}>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
    </Suspense>
  </div>
  );
};

