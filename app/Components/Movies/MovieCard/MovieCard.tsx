import React from "react";
import { Movie } from "../../../Interfaces/Movies";
import Image from "next/image";
import "./MovieCard.css";
import Link from "next/link";

interface Props {
  movie: Movie;
}
export const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie_card">
      <h6>{movie.title}</h6>
      <Image
        width={100}
        height={150}
        src="https://cdn.europosters.eu/image/750/posters/stranger-things-summer-of-85-i76122.jpg"
        alt="movie"
      />
      <p>{movie.rating}</p>
      <Link href={`/movies/${movie.imdb_id}`}>GOOOOOOOOOOO</Link>
    </div>
  );
};
