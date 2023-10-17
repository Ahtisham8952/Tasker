import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/rajdhani';
import { ComponentType } from 'react';
import { TaskerTheme } from '../src/theme';

import '../styles/globals.css';
import LayoutWrapper from '../src/components/core/LayoutWrapper/LayoutWrapper';

type AppProps = {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
};

const Tasker = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={TaskerTheme}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ChakraProvider>
  );
};

export default Tasker;
