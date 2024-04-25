'use client';

import ApolloWrapper from '@/apollo/apolloProvider';
import { ThemeProvider } from 'next-themes';
import React from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloWrapper>
      <ThemeProvider enableSystem defaultTheme="system" attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ApolloWrapper>
  );
}
