import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/rajdhani';
import TaskerTheme from '../src/theme';
import '../styles/globals.css';
import LayoutWrapper from '../src/components/core/LayoutWrapper/LayoutWrapper';

const Tasker = ({ pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={TaskerTheme}>
      <LayoutWrapper>{pageProps.children}</LayoutWrapper>
    </ChakraProvider>
  );
};

export default Tasker;
