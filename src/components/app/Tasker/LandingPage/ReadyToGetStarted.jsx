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
        <Flex
          justifyContent={'center'}
          mt={{ base: '30px', lg: '60px' }}
          flexDirection={{ base: 'column', lg: 'row' }}
          gap="20px"
        >
          <Box w={{ base: '100%', lg: '45%' }}>
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
            <Image mx="auto" src="/header/paperpast1.svg"></Image>
            <Flex mt="30px" justifyContent={'center'}>
              <Button
                bg="#1F4A40"
                colorScheme="#1F4A40"
                borderRadius={'40px'}
                w={'314px'}
                py="25px"
                mx="auto"
                h="73px"
              >
                Sign up
              </Button>
            </Flex>
          </Box>
          <Box w={{ base: '100%', lg: '45%' }}>
            <Text
              fontWeight="600"
              fontSize="20px"
              lineHeight="150% "
              color="#1F1F1F"
              maxW={'380px'}
              mx="auto"
              mb="40px"
              textAlign={'center'}
            >
              Grow your own business while saving the day for busy neighbors.
            </Text>
            <Image mx="auto" src="/header/paperpast2.svg"></Image>
            <Flex mt="30px" justifyContent={'center'}>
              <Button
                bg="#1F4A40"
                colorScheme="#1F4A40"
                borderRadius={'40px'}
                w={'314px'}
                py="25px"
                mx="auto"
                h="73px"
              >
                Become a Tasker
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ReadyToGetStarted;
