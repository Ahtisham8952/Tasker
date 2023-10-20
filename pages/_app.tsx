import { ChakraProvider, ThemeProvider } from '@chakra-ui/react';
import '@fontsource/rajdhani';
import { ComponentType } from 'react';

import '../styles/globals.css';
import LayoutWrapper from '../src/components/core/LayoutWrapper/LayoutWrapper';
import TaskerTheme from '../src/theme';

type AppProps = {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
};

const Flok: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS>
      <ThemeProvider theme={TaskerTheme}>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default Flok;
