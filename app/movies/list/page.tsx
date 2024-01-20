"use client";
import styles from './moviesList.module.css'
import {useState} from 'react'
import Link from 'next/link';
import { MovieList } from "../../Components/Movies/MovieList/MovieList";
import { AutoComplete } from 'antd';
import { useQuery } from '@apollo/client';
import { MoviesQuery } from '@/app/lib/client/query/Movies';



export default function MovieListPage() {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const onChange = (data: string) => {
    setValue(data);
  };
  const GetPanelValue = (searchText: string) => {
    //@ts-ignore
      const { loading, error, data } = useQuery(MoviesQuery.MOVIE_SEARCH, {variables: {title: searchText} }); 
      return data
  }

   
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  return <div className="movie_list_container">
    <Link href={'/movies/create'} className={styles.to_create_movie_page}>Add Movie</Link>
    <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(GetPanelValue(text))}
        placeholder="input here"
      />
    {<MovieList />}
    </div>;
}
