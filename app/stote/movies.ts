import {create} from "zustand";
import axios from 'axios'

interface iniState  {
    movies: any[]
    useMoviesStore: () => {}
}
export const useMoviesStore = create((set) => ({
    movies: {},
    fetch: async () => {
   
const options = {
    method: 'GET',
    url: 'https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/',
    headers: {
      'X-RapidAPI-Key': '3bfcd18249msh020025f0b32c2b8p1c0a1cjsnb075099ab8c5',
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      set({ movies: response.data.results })
  } catch (error) {
      console.error(error);
  }
    },
  }))