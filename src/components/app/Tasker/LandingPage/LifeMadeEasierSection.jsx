import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const LifeMadeEasierSection = () => {
  return (
    <>
      <Box pb="50px">
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={'center'}
          gap="20px"
          justifyContent={'space-between'}
        >
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
              Everyday life made easier
            </Text>
            <Text
              fontWeight="500"
              fontSize={{ base: '16px', lg: '24px' }}
              lineHeight="150% "
              color="#1F1F1F"
            >
              When life gets busy, you don’t have to tackle it alone. Get time
              back for what you love without breaking the bank.
            </Text>
            <Flex alignItems={'center'} gap="30px" mt="24px">
              <Image src="/header/backtick.svg"></Image>
              <Text
                fontWeight="500"
                fontSize={{ base: '16px', lg: '24px' }}
                lineHeight="150% "
                color="#1F1F1F"
              >
                Choose your Tasker by reviews, skills, and price
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
                Schedule when it works for you — as early as today
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
                Chat, pay, tip, and review all through one platform
              </Text>
            </Flex>
          </Box>
          <Box w={{ base: '100%', md: '50%' }}>
            <Image w="100%" src="/header/easylife.png"></Image>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default LifeMadeEasierSection;
