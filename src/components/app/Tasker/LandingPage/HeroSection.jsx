import React from 'react';
import { Box, Flex, Text, Image, Input, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import CategoryDropdown from './CategoryDropdown';
import CountAnimation from './CountAnimation';
const HeroSection = () => {
  return (
    <>
      <Box px="20px" bg="#1F4A40">
        <Box
          h="100vh"
          w="100%"
          pt={{ base: '50px', lg: '100px' }}
          maxW={'1760px'}
          mx={'auto'}
        >
          <Flex alignItems={'center'} gap="40px">
            <Box w={{ base: '100%', lg: '45%' }}>
              <Text
                maxW={{ base: '100%', lg: '686px' }}
                w="100%"
                fontWeight="700"
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
                color="#FFFFFF"
              >
                Find the perfect Tasker services for your life easier
              </Text>
              <Box
                mt={{
                  base: '50px',
                  md: '60px',
                  xl: '70px',
                  xxl: '80px',
                  xxxl: '100px',
                }}
                bg="white"
                borderRadius={'30px'}
                pr="15px"
                pl={{ base: '15px', md: '44px' }}
                py="15px"
                position={'relative'}
                w={{
                  base: '100%',
                  lg: '700px',
                  xl: '800px',
                  xxl: '900px',
                  xxxl: '977px',
                }}
              >
                <Flex
                  justifyContent={'space-between'}
                  flexDirection={{ base: 'column', md: 'row' }}
                  gap="20px"
                >
                  <Flex alignItems={'center'}>
                    <SearchIcon />
                    <Input
                      _focusVisible={{ border: 'none' }}
                      border="none"
                      placeholder="What are you looking for?"
                    />
                  </Flex>
                  <Box>
                    <CategoryDropdown />
                  </Box>
                  <Box>
                    <Button
                      colorScheme="#5BBB7B"
                      bg="#5BBB7B"
                      p="14px 22px"
                      color="white"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight={'24px'}
                      borderRadius={'40px'}
                      w="100%"
                    >
                      Search
                    </Button>
                  </Box>
                </Flex>
              </Box>
              <Box mt="43px">
                <Flex
                  alignItems={'center'}
                  gap="50px"
                  flexWrap={{ base: 'wrap', md: 'nowrap' }}
                >
                  <CountAnimation
                    targetCount={834}
                    duration={5000}
                    Name="Total Freelancer"
                  />
                  <CountAnimation
                    targetCount={732}
                    duration={5000}
                    Name="Positive Review"
                  />
                  <CountAnimation
                    targetCount={90}
                    duration={5000}
                    Name="Order recieved"
                  />
                  <CountAnimation
                    targetCount={236}
                    duration={5000}
                    Name="Projects Completed"
                  />
                </Flex>
              </Box>
            </Box>
            <Box w="55%" display={{ base: 'none', lg: 'block' }}>
              <Image alt="img" src="/header/CarpanterImage.png"></Image>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
