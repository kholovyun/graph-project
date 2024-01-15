import { useQuery, gql } from '@apollo/client';

export const MoviesQuery = {
  GET_MOVIES : gql`
  query {
    getAllMovies {
      title
      poster
      id
      genre {
        id
        name
      }
    }
  }
  `,
  GET_MOVIE: gql`
  query ($getMovieId: ID!) {
    getMovie(id: $getMovieId) {
      title
      poster
      id
      genre {
        id
        name
      }
    }
  }
  `
}

