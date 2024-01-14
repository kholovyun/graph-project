import {create} from "zustand";
import axios from 'axios'

interface iniState  {
    movies: any[]
    useMoviesStore: () => {}
}
export const useMoviesStore = create((set) => ({
    movies: {},
    fetch: async ():Promise<any> => {
   
const options = {
    method: 'GET',
    url: 'https://marketcv-817cc-default-rtdb.firebaseio.com/users',
  };
  
  try {
      const response = await axios.request(options);
      console.log(response)
      set({ movies: await response.data.results })
  } catch (error) {
      console.error(error);
  }
    },
  }))