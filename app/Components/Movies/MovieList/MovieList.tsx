"use client";
import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { useMoviesStore } from "../../../stote/movies";
import "./MovieList.css";
import { Movie } from "../../../Interfaces/Movies";

export const MovieList = () => {
  //@ts-ignore
  const fetchMovies = useMoviesStore((state) => state.fetch);
  //@ts-ignore
  const movies = useMoviesStore((state) => state.movies);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchMovies();
        //@ts-ignore
        console.log(useMoviesStore.getState().movies, "aaaaaaaa");
      } catch (error) {
        console.error("Ошибка при загрузке фильмов:", error);
      }
    };

    fetchData();
  }, [fetchMovies]);

  return (
    <div className="movieList">
      {Array.isArray(movies) && movies.length > 0 ? (
        movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.imdb_id} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
