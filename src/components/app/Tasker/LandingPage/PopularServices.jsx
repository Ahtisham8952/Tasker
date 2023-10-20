import React from 'react';
import { Box, Grid, Image, Text, Flex } from '@chakra-ui/react';
const PopularService = [
  {
    Image: '/header/ServiceCard1.png',
    Name: 'Featured Task',
    Price: 'Avg. Project: $55 - $128',
  },
  {
    Image: '/header/ServiceCard2.png',
    Name: 'Mount a TV, art or shelves',
    Price: 'Avg. Project: $55 - $128',
  },
  {
    Image: '/header/ServiceCard3.png',
    Name: 'Help Moving',
    Price: 'Avg. Project: $55 - $128',
  },
  {
    Image: '/header/ServiceCard4.png',
    Name: 'Home Cleaning',
    Price: 'Avg. Project: $55 - $128',
  },
  {
    Image: '/header/ServiceCard5.png',
    Name: 'Minor Plumbing Repairs',
    Price: 'Avg. Project: $55 - $128',
  },
  {
    Image: '/header/ServiceCard6.png',
    Name: 'Electrical Help',
    Price: 'Avg. Project: $55 - $128',
  },
  {
    Image: '/header/ServiceCard7.png',
    Name: 'Heavy Lifting',
    Price: 'Avg. Project: $55 - $128',
  },
  {
    Image: '/header/ServiceCard8.png',
    Name: 'Yardwork & Gardening',
    Price: 'Avg. Project: $55 - $128',
  },
];
const PopularServices = () => {
  return (
    <>
      <Box py={{ base: '40px', md: '50px', lg: '80px' }}>
        <Box>
          <Text
            fontWeight="600"
            fontSize={{
              base: '27px',
              md: '31px',
              lg: '34px',
              xl: '38px',
              xxl: '48px',
            }}
            lineHeight="150% "
            color="#000"
          >
            Popular Services
          </Text>
          <Text
            fontWeight="500"
            fontSize={{ base: '16px', lg: '24px' }}
            lineHeight="150% "
            color="#1F1F1F"
          >
            Most viewed and all-time top-selling services
          </Text>
        </Box>
        <Box>
          <Grid
            mt="60px"
            gap="24px"
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
              xl: 'repeat(4, 1fr)',
            }}
            w="100%"
          >
            {PopularService?.map((Ser, index) => (
              <Box
                key={index}
                cursor={'pointer'}
                borderRadius={'10px'}
                border="1px solid #CFCFCF"
                _hover={{
                  boxShadow:
                    ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                }}
              >
                <Image alt="img" w="100%" src={Ser.Image}></Image>
                <Box
                  bg="white"
                  borderRadius={'0px 0px 10px 10px'}
                  py="23px"
                  px="18px"
                >
                  <Text
                    fontWeight="600"
                    fontSize={{ base: '20px', lg: '24px' }}
                    lineHeight="150% "
                    color="#010101"
                  >
                    {Ser.Name}
                  </Text>
                  <Flex alignItems={'center'} gap="10px">
                    <Image alt="img" src="/header/pricetag1.svg"></Image>
                    <Text
                      fontWeight="400"
                      fontSize="20px"
                      lineHeight="150% "
                      color="#464646"
                    >
                      {Ser.Price}
                    </Text>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default PopularServices;
