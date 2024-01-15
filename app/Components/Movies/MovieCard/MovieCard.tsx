import React from "react";
import Image from "next/image";
import "./MovieCard.css";
import Link from "next/link";
import { Movie } from "@/src/__generated__/graphql";

interface Props {
  movie: Movie;
}
export const MovieCard = ({ movie }: Props) => {
  console.log(movie.poster)
  return (
    <div className="movie_card">
      <h6>{movie.title}</h6>
      <Image
        width={100}
        height={150}
        src= {movie.poster? `${movie.poster}`:"https://cdn.europosters.eu/image/750/posters/stranger-things-summer-of-85-i76122.jpg"}
        alt="movie"
      />
      <p>{movie.title}</p>
      <Link href={`/movies/${movie.id}`}>GOOOOOOOOOOO</Link>
    </div>
  );
};
