"use client";
import React from 'react'
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import { Genre } from '@/src/__generated__/graphql';
import { GenreQuery } from '@/app/lib/client/query/Genre';
import { MovieMutations } from '@/app/lib/client/mutation/movie';
import styles from './createForm.module.css'
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';


export default function CreateMovieForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loading, error, data } = useQuery(GenreQuery.GET_GENRE);
    const [addMovie] = useMutation(MovieMutations.ADD_MOVIE);
  
    const onSubmit = async (formData: any) => {
      try {
        await addMovie({
          variables: {
            title: formData.title,
            poster: formData.poster,
            genre: formData.genre
          },
        });
        toast("Movies Created")
      } catch (err) {
        const error = err as Error
        console.error("Error adding movie:", error);
        toast(error.message)
      }
    };
  
    return (
      <form
        className={styles.create_form}
        onSubmit={handleSubmit(onSubmit)}
      > 
        <input className={styles.create_form_input} placeholder='poster link'{...register('poster')} />
        <input className={styles.create_form_input} placeholder='title' {...register('title', { required: true })} />
        <select {...register("genre")}>
          {data?.getGenres?.map((genre: Genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <button className={styles.create_form_btn} type="submit">Create Movie</button>
      </form>
    );
  }
  