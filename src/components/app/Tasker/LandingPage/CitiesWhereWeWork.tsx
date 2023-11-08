import React from 'react';
import { Box, Flex, Text, Button, Input, Grid } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import CitiesComponent from './CitiesComponent';
const WorkCities = [
  {
    CityImage: '/header/CityTop1.webp',
    CityName: 'Atlanta',
  },
  {
    CityImage: '/header/CityTop2.webp',
    CityName: 'Austin ',
  },
  {
    CityImage: '/header/CityTop3.webp',
    CityName: 'Boston ',
  },
  {
    CityImage: '/header/CityTop4.webp',
    CityName: 'Chicago ',
  },
  {
    CityImage: '/header/CityTop5.webp',
    CityName: 'Dallas/ Fort Worth ',
  },
  {
    CityImage: '/header/CityTop6.webp',
    CityName: 'Kansas City ',
  },
  {
    CityImage: '/header/CityTop7.webp',
    CityName: 'Denver ',
  },
  {
    CityImage: '/header/CityTop8.webp',
    CityName: 'Houston ',
  },
  {
    CityImage: '/header/CityTop9.webp',
    CityName: 'LA & OC ',
  },
  {
    CityImage: '/header/CityTop10.webp',
    CityName: 'Miami ',
  },
  {
    CityImage: '/header/CityTop11.webp',
    CityName: 'New York City ',
  },
  {
    CityImage: '/header/CityTop12.webp',
    CityName: 'philadelphia ',
  },
  {
    CityImage: '/header/CityTop13.webp',
    CityName: 'New Heaven ',
  },
  {
    CityImage: '/header/CityTop14.webp',
    CityName: 'phoenix ',
  },
];
const CitiesWhereWeWork = () => {
  return (
    <>
      <Box mt={{ base: '30px', lg: '60px' }}>
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
          >
            Cities where we work - Tasker
          </Text>
        </Box>
        <Flex justifyContent={'flex-end'} my={{ base: '30px', lg: '60px' }}>
          <Box
            bg="#FFFFFF"
            p="6px"
            border="1px solid #DBDBDB"
            borderRadius={'60px'}
          >
            <Flex justifyContent={'space-between'}>
              <Flex alignItems={'center'}>
                <SearchIcon />
                <Input
                  _focusVisible={{ border: 'none' }}
                  border="none"
                  placeholder="Search by zip code"
                />
              </Flex>
              <Button
                bg="#1F4A40"
                colorScheme="#1F4A40"
                borderRadius={'40px'}
                w={'297px'}
                py="25px"
                mx="auto"
                h="73px"
              >
                Check Availability
              </Button>
            </Flex>
          </Box>
        </Flex>
        <Grid
          mb="30px"
          gap="24px"
          templateColumns={{
            base: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(7, 1fr)',
            xl: 'repeat(7, 1fr)',
          }}
          w="100%"
        >
          <CitiesComponent Cities={WorkCities} />
        </Grid>
      </Box>
    </>
  );
};

export default CitiesWhereWeWork;
