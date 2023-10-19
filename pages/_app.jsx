import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/rajdhani';
import { Component } from 'react';
import TaskerTheme from '../src/theme';
import '../styles/globals.css';
import LayoutWrapper from '../src/components/core/LayoutWrapper/LayoutWrapper';

const Tasker = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={TaskerTheme}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ChakraProvider>
  );
};

export default Tasker;
