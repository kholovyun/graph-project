"use client";
import { MovieCard } from "../MovieCard/MovieCard";
import "./MovieList.css";
import { useQuery } from '@apollo/client';
import { MoviesQuery } from '@/app/lib/client/query/Movies';
import { Movie } from "@/src/__generated__/graphql";

export const MovieList = () => {
  const { loading, error, data } = useQuery(MoviesQuery.GET_MOVIES);
  return (
    <div className="movieList">
      {Array.isArray(data?.getAllMovies) && data?.getAllMovies.length > 0 ? (
        data?.getAllMovies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
