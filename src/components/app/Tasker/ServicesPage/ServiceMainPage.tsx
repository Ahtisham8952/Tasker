import { Box } from '@chakra-ui/react';
import React from 'react';
import LayoutWrapper from '../../../core/LayoutWrapper/LayoutWrapper';

import ServicesBanner from './ServicesBanner';

const ServiceMainPage = () => {
  return (
    <>
      <LayoutWrapper>
        <Box bg="white">
          <ServicesBanner />
          <Box
            pt={{ base: '50px', lg: '100px' }}
            maxW={'1760px'}
            mx={'auto'}
            px="20px"
          ></Box>
        </Box>
      </LayoutWrapper>
    </>
  );
};

export default ServiceMainPage;
