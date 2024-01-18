"use client";
import styles from './moviesList.module.css'
import Link from 'next/link';
import { MovieList } from "../../Components/Movies/MovieList/MovieList";

export default function MovieListPage() {
  return <div className="movie_list_container">
    <Link href={'/movies/create'} className={styles.to_create_movie_page}>Add Movie</Link>
    {<MovieList />}
    </div>;
}
