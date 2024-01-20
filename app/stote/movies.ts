import {create} from "zustand";
import { useQuery } from "@apollo/client";
import { MoviesQuery } from "../lib/client/query/Movies";

interface iniState  {
    movies: any[]
    useMoviesStore: () => {}
}
export const useMoviesStore = create((set) => ({
    movies: {},
    Fetch: async ():Promise<any> => {
  try {
      const response = useQuery(MoviesQuery.GET_MOVIES);
      console.log(response)
      set({ movies: response })
  } catch (error) {
      console.error(error);
  }
    },
  }))