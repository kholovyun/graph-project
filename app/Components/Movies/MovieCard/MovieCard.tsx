import React from "react";
import Image from "next/image";
import "./MovieCard.css";
import Link from "next/link";
import { Movie } from "@/src/__generated__/graphql";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <Link href={`/movies/${movie.id}`} passHref={true} legacyBehavior>
      <a className="movie_card">
        <h6 className="movie_title">{movie.title}</h6>
        <Image
          width={150}
          height={80}
          src={movie.poster ? `${movie.poster}` : "https://cdn.europosters.eu/image/750/posters/stranger-things-summer-of-85-i76122.jpg"}
          alt="movie"
        />
        <p>{movie.genre?.name}</p>
      </a>
    </Link>
  );
};
