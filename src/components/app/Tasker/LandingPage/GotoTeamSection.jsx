import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const GotoTeamSection = () => {
  return (
    <>
      <Box pb="50px">
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={'center'}
          gap="20px"
          justifyContent={'space-between'}
        >
          <Box w={{ base: '100%', md: '50%' }}>
            <Image w="100%" src="/header/easylifegoals.png"></Image>
          </Box>
          <Box w={{ base: '100%', md: '45%' }}>
            <Text
              mb="24px"
              fontWeight="600"
              fontSize={{
                base: '27px',
                md: '31px',
                lg: '34px',
                xl: '38px',
                xxl: '48px',
              }}
              lineHeight="150% "
              color="#1F1F1F"
            >
              A go-to team at your fingertips
            </Text>
            <Text
              fontWeight="500"
              fontSize={{ base: '16px', lg: '24px' }}
              lineHeight="150% "
              color="#1F1F1F"
            >
              Build your team of local, background-checked Taskers to help with
              — and for — life. Whatever you need, they’ve got it covered.
            </Text>
            <Flex alignItems={'center'} gap="30px" mt="24px">
              <Image src="/header/backtick.svg"></Image>
              <Text
                fontWeight="500"
                fontSize={{ base: '16px', lg: '24px' }}
                lineHeight="150% "
                color="#1F1F1F"
              >
                Compare Tasker reviews, ratings, and prices
              </Text>
            </Flex>
            <Flex alignItems={'center'} gap="30px" mt="16px">
              <Image src="/header/backtick.svg"></Image>
              <Text
                fontWeight="500"
                fontSize={{ base: '16px', lg: '24px' }}
                lineHeight="150% "
                color="#1F1F1F"
              >
                Choose and connect with the best person for the job
              </Text>
            </Flex>
            <Flex alignItems={'center'} gap="30px" mt="16px">
              <Image src="/header/backtick.svg"></Image>
              <Text
                fontWeight="500"
                fontSize={{ base: '16px', lg: '24px' }}
                lineHeight="150% "
                color="#1F1F1F"
              >
                Save your favorites to book again and again
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default GotoTeamSection;
