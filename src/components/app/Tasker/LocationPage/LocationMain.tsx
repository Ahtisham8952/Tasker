import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import LayoutWrapper from '../../../core/LayoutWrapper/LayoutWrapper';

import CitiesComponent from '../LandingPage/CitiesComponent';
const WorkCities = [
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'Atlanta',
  },
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'Austin ',
  },
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'Boston ',
  },
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'Chicago ',
  },
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'Dallas/ Fort Worth ',
  },
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'Kansas City ',
  },
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'Denver ',
  },
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'Houston ',
  },
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'LA & OC ',
  },
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'Miami ',
  },
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'New York City ',
  },
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'philadelphia ',
  },
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'New Heaven ',
  },
  {
    CityImage: '/header/CityTop1.svg',
    CityName: 'phoenix ',
  },
];
const LocationMain = () => {
  return (
    <>
      <LayoutWrapper>
        <Box bg="white">
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
                    Find Us In These Cities
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
                    maxW={'915px'}
                  >
                    Everyday work is important, but it’s also time consuming. We
                    can help.
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box
            pt={{ base: '50px', lg: '100px' }}
            maxW={'1760px'}
            mx={'auto'}
            px="20px"
          >
            <Flex
              alignItems={'center'}
              gap={{ base: '30px', md: '60px' }}
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Image src="/tasker/locators.svg"></Image>
              <Box>
                <Text
                  fontWeight="600"
                  fontSize={{
                    base: '24px',
                    md: '26px',
                    lg: '28px',
                    xl: '34px',
                    xxl: '34px',
                    xxxl: '40px',
                  }}
                  lineHeight="150% "
                  color="#000000"
                >
                  Find Us In These Cities
                </Text>
                <Text
                  fontWeight="400"
                  fontSize={{
                    base: '16px',
                    md: '20px',
                    lg: '24px',
                  }}
                  lineHeight="150% "
                  color="#000000"
                  maxW={'915px'}
                >
                  Lorem Ipsum is not simply random text. It has roots in a piece
                </Text>
              </Box>
            </Flex>
            <Box my="60px">
              <Grid
                mb="30px"
                gap="24px"
                templateColumns={{
                  base: 'repeat(2, 1fr)',
                  sm: 'repeat(3, 1fr)',
                  md: 'repeat(4, 1fr)',
                  lg: 'repeat(6, 1fr)',
                  xl: 'repeat(6, 1fr)',
                }}
                w="100%"
              >
                <CitiesComponent Cities={WorkCities} />
              </Grid>
            </Box>
            <Box my={{ base: '30px', md: '60px' }}>
              <Text
                fontWeight="600"
                fontSize={{
                  base: '24px',
                  md: '26px',
                  lg: '28px',
                  xl: '34px',
                  xxl: '34px',
                  xxxl: '40px',
                }}
                lineHeight="150% "
                color="#000000"
                textAlign={'center'}
                mb={{ base: '20px', md: '40px' }}
              >
                How it works
              </Text>
              <Grid
                mb="30px"
                gap="24px"
                templateColumns={{
                  base: 'repeat(2, 1fr)',
                  sm: 'repeat(3, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(3, 1fr)',
                  xl: 'repeat(3, 1fr)',
                }}
                w="100%"
              >
                <Box>
                  <Image
                    alt="img"
                    mx="auto"
                    src="/tasker/taskflow1.svg"
                  ></Image>
                  <Box>
                    <Text
                      fontWeight="600"
                      fontSize={{
                        base: '16px',
                        md: '18px',
                        lg: '22px',
                        xl: '24px',
                        xxl: '24px',
                        xxxl: '24px',
                      }}
                      lineHeight="150% "
                      color="#000000"
                      textAlign={'center'}
                    >
                      Describe Your Task
                    </Text>
                    <Text
                      fontWeight="400"
                      fontSize={{
                        base: '16px',
                        md: '18px',
                        lg: '20px',
                      }}
                      lineHeight="150% "
                      color="#000000"
                      maxW={'389px'}
                      textAlign={'center'}
                      mx="auto"
                    >
                      Tell us what you need done, when and where it works for
                      you.
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Image
                    alt="img"
                    mx="auto"
                    src="/tasker/taskflow2.svg"
                  ></Image>
                  <Box>
                    <Text
                      fontWeight="600"
                      fontSize={{
                        base: '16px',
                        md: '18px',
                        lg: '22px',
                        xl: '24px',
                        xxl: '24px',
                        xxxl: '24px',
                      }}
                      lineHeight="150% "
                      color="#000000"
                      textAlign={'center'}
                    >
                      Choose Your Tasker
                    </Text>
                    <Text
                      fontWeight="400"
                      fontSize={{
                        base: '16px',
                        md: '18px',
                        lg: '20px',
                      }}
                      lineHeight="150% "
                      color="#000000"
                      maxW={'389px'}
                      textAlign={'center'}
                      mx="auto"
                    >
                      Browse trusted Taskers by skills, reviews, and price. Chat
                      with them to confirm details.
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Image
                    alt="img"
                    mx="auto"
                    src="/tasker/taskflow3.svg"
                  ></Image>
                  <Box>
                    <Text
                      fontWeight="600"
                      fontSize={{
                        base: '16px',
                        md: '18px',
                        lg: '22px',
                        xl: '24px',
                        xxl: '24px',
                        xxxl: '24px',
                      }}
                      lineHeight="150% "
                      color="#000000"
                      textAlign={'center'}
                    >
                      Get It Done
                    </Text>
                    <Text
                      fontWeight="400"
                      fontSize={{
                        base: '16px',
                        md: '18px',
                        lg: '20px',
                      }}
                      lineHeight="150% "
                      color="#000000"
                      maxW={'389px'}
                      textAlign={'center'}
                      mx="auto"
                    >
                      Your Tasker arrives and gets the job done. Pay securely
                      and leave a review, all through TaskRabbit.
                    </Text>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Box>
      </LayoutWrapper>
    </>
  );
};

export default LocationMain;
