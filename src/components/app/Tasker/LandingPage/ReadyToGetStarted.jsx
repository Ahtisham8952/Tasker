import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import React from 'react';

const ReadyToGetStarted = () => {
  return (
    <>
      <Box py={{ base: '30px', lg: '60px' }}>
        <Box>
          <Text
            fontWeight="600"
            fontSize={{
              base: '25px',
              md: '33px',
              xl: '41px',
              xxl: '44px',
              xxxl: '48px',
            }}
            lineHeight={{
              base: '30px',
              md: '40px',
              xl: '50px',
              xxl: '60px',
              xxxl: '70px',
            }}
            color="#1F1F1F"
            textAlign={'center'}
          >
            Ready to get started?
          </Text>
        </Box>
        <Flex>
          <Box w="45%">
            <Text
              fontWeight="600"
              fontSize="20px"
              lineHeight="150% "
              color="#1F1F1F"
              maxW={'326px'}
              mx="auto"
              mb="40px"
            >
              Hear that? The sweet sigh of relief. Start getting more done.
            </Text>
            <Image src="/header/paperpast1.svg"></Image>
            <Button
              bg="#1F4A40"
              colorScheme="#1F4A40"
              borderRadius={'40px'}
              maxW={'314px'}
              py="25px"
            ></Button>
          </Box>
          <Box w="45%"></Box>
        </Flex>
      </Box>
    </>
  );
};

export default ReadyToGetStarted;
