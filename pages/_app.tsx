import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app'; // Import the AppProps type from 'next/app'
import TaskerTheme from '../src/theme'; // Import your theme from the correct path
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={TaskerTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
