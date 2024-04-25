import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from '@apollo/client';

// Define the apollo and insert access token + uri

const accessToken = 'cTPlIfx_O15U6vVUUCsLX7jycvMTS_YJC68AZjGlbFY';

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`
    }
  }));

  return forward(operation);
});

const httpLink = new HttpLink({
  uri: 'https://graphql.contentful.com/content/v1/spaces/jhf0apvy4fhs/environments/master'
});

const client = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
