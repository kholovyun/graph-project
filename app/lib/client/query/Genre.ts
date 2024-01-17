import { gql } from '@apollo/client';

export const GenreQuery = {
  GET_GENRE : gql`
  query GetGenres {
    getGenres {
      name, id
    }
  }`
}

