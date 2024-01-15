'use client';
import React, { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/client/client';
//@ts-ignore
export function Providers({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
