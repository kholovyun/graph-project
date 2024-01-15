"use client";

import { MoviesQuery } from "@/app/lib/client/query/Movies";
import { useQuery } from "@apollo/client";
import Image from "next/image";

const MovieDetailPage = ({ params }) => {
  const id = params.id
const {data, error} = useQuery(MoviesQuery.GET_MOVIE, {variables: { "getMovieId" :id.toString()}})
  return (
    <div>
      <h1>{data?.getMovie.title}</h1>
      <Image width={300} height={200} src={data?.getMovie?.poster} alt="IMG" priority={false}/>
    </div>
  );
};

export default MovieDetailPage;
