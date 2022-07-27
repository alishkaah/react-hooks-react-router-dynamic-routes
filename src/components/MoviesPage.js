import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow";

import MoviesList from "./MoviesList";

function MoviesPage({ movies }) {
  const match = useRouteMatch()
  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movie`}/>
      <MovieShow movies={movies}/>
    </div>
  );
}
export default MoviesPage;
