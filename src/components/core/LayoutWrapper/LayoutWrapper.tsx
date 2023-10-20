import React from 'react';
import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const LayoutWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box bg="#F3F3F3" minH={'100vh'}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default LayoutWrapper;
