import { useQuery, gql } from '@apollo/client';

const GET_ROCKET_INVENTORY = gql( `
  query  {
  getAllMovies {
    id
    poster
  }
}
`);

export const DataRe = () => {
  const { loading, data, error } = useQuery(
    GET_ROCKET_INVENTORY,
  );
  return data
}