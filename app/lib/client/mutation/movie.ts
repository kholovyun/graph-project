import { gql, useMutation } from '@apollo/client';

export const MovieMutations = {
    ADD_MOVIE : gql`
    mutation AddMovie($title: String!, $poster: String!, $genre: ID!) {
        addMovie(title: $title, poster: $poster, genre: $genre) {
          id
        }
      }
    `
}
