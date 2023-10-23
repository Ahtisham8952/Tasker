import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const CustomWrapper = ({ children }) => {
  return (
    <>
      <Box
        px="10px"
        bgImage="url('/signup/mainbgcore.png')" // Specify the path to your background image
        bgSize="cover"
        bgPosition="center"
        h="100vh" // Set the height to fill the viewport
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="100%"
          maxW={'688px'}
          bg="white"
          borderRadius={'20px'}
          p={{ base: '20px', lg: '40px' }}
        >
          <Text
            fontFamily={'antique'}
            fontWeight="700"
            fontSize={{
              base: '18px',
              md: '18px',
              lg: '20px',
              xl: '22px',
              xxl: '24px',
              xxxl: '48px',
            }}
            lineHeight="150% "
            color="#1F1F1F"
            textAlign={'center'}
          >
            TASKER
          </Text>
          <Box>{children}</Box>
        </Box>
      </Box>
    </>
  );
};

export default CustomWrapper;
