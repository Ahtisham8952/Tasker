import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const ServicesBanner = () => {
  return (
    <>
      <Box px="20px" bg="#1F4A40">
        <Box
          h={{ base: '264px', md: '340px', lg: '564px' }}
          w="100%"
          pt={{ base: '30px', md: '50px', lg: '100px' }}
          maxW={'1760px'}
          mx={'auto'}
          px={{ base: '20px', md: '60px' }}
        >
          <Flex flexDirection={'column'} justifyContent={'center'} h="100%">
            <Box>
              <Text
                fontWeight="700"
                fontSize={{
                  base: '24px',
                  md: '28px',
                  lg: '32px',
                  xl: '42px',
                  xxl: '54px',
                  xxxl: '64px',
                }}
                lineHeight="150% "
                color="#FFFFFF"
              >
                Your to-do list is on us
              </Text>
              <Text
                fontWeight="500"
                fontSize={{
                  base: '16px',
                  md: '22px',
                  lg: '32px',
                }}
                lineHeight="150% "
                color="#FFFFFF"
              >
                Give your visitor a smooth online experience
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default ServicesBanner;
