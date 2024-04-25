'use client';

import { ApolloProvider } from '@apollo/client';
import client from './client';

const ApolloWrapper = ({ children }: { children: React.ReactNode }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloWrapper;
