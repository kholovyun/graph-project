"use client";
import React from 'react'
import { useForm } from 'react-hook-form';
import { useQuery } from '@apollo/client';
import { Genre } from '@/src/__generated__/graphql';
import { GenreQuery } from '@/app/lib/client/query/Genre';


export default function CreateMovieForm () {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const { loading, error, data } = useQuery(GenreQuery.GET_GENRE);
    return (
      <form style={{backgroundColor: "black", padding: "30px"}} onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register('poster')} />
        <input {...register('title', { required: true })} />
        <select {...register("genre")}>
            {data?.getGenres?.map((genre: Genre) => {
                return (<option key={genre.id} value={genre.id}>{genre.name}</option>)
            })}
      </select>
        {errors.title && <p>Last name is required.</p>}
        <input style={{backgroundColor: "white"}} type="submit" />
      </form>
    );
  }
