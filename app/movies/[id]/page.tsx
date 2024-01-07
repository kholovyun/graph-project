"use client";

import { useEffect, useState } from "react";
import { useMoviesStore } from "../../stote/movies";

const MovieDetailPage = ({ params }) => {
  //@ts-ignore
  const movies = useMoviesStore((state) => state.movies);
  const [data, setData] = useState({});
  useEffect(() => {
    // Вы можете использовать значение id для загрузки данных о фильме из вашего источника данных
    if (params.id) {
      console.log(`Loading details for movie with id: ${params.id}`);
      const dr = movies.filter((el) => {
        return el.imdb_id === params.id;
      });
      setData(dr);
    }
  }, [params.id]);

  return (
    <div>
      <h1>{data ? JSON.stringify(data) : "YUNus"}</h1>
      {/* Здесь можете разместить информацию о фильме */}
    </div>
  );
};

export default MovieDetailPage;
