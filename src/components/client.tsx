import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://main--yosefs-team-3-xp1cn7.apollographos.net',
  cache: new InMemoryCache(),
});
