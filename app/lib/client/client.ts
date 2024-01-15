// apollo.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',// Укажите ваш эндпоинт GraphQL сервера
  cache: new InMemoryCache(),
});

export default client;
