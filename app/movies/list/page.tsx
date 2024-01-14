"use client";
import { DataRe } from "@/app/lib/client/query/Movies";
import { MovieList } from "../../Components/Movies/MovieList/MovieList";
export default function MovieListPage() {
  const dataReset = async () => {
    const data = await DataRe();
    console.log(data);
    return data;
  };
  dataReset();
  return <div className="movie_list_container">{/* <MovieList /> */}</div>;
}
