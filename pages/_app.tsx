import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app'; // Import the AppProps type from 'next/app'
import TaskerTheme from '../src/theme'; // Import your theme from the correct path
import '../styles/globals.css';
import LayoutWrapper from '../src/components/core/LayoutWrapper/LayoutWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={TaskerTheme}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
