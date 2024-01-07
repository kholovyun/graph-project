"use client";
import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { useMoviesStore } from "../../../stote/movies";
import "./MovieList.css";
import { Movie } from "../../../Interfaces/Movies";

export const MovieList = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  //@ts-ignore
  const fetchMovies = useMoviesStore((state) => state.fetch);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <div className="movieList">
      {movies ? (
        movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.imdb_id} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
