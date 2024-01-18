"use client";

import { MovieList } from "../../Components/Movies/MovieList/MovieList";

export default function MovieListPage() {
  return <div className="movie_list_container">
    {<MovieList />}
    </div>;
}
