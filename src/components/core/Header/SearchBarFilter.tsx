import { Box, Image, Flex, Input, Button, Grid, Link } from '@chakra-ui/react';

import React, { useState } from 'react';
const data = [
  {
    searchName: 'Near me',
    Redirect: '',
  },
  {
    searchName: 'Music',
    Redirect: '',
  },
  {
    searchName: 'Language',
    Redirect: '',
  },
  {
    searchName: 'Chess',
    Redirect: '',
  },
  {
    searchName: 'Reading',
    Redirect: '',
  },
  {
    searchName: 'Adventure',
    Redirect: '',
  },
  {
    searchName: 'All',
    Redirect: '',
  },
  {
    searchName: 'Today',
    Redirect: '',
  },
  {
    searchName: 'This weekend',
    Redirect: '',
  },
  {
    searchName: 'Free',
    Redirect: '',
  },
  {
    searchName: 'Wednesday',
    Redirect: '',
  },
  {
    searchName: 'Geneva',
    Redirect: '/genevaevents',
  },
  {
    searchName: 'Music',
    Redirect: '',
  },
  {
    searchName: 'Language',
    Redirect: '',
  },
  {
    searchName: 'Chess',
    Redirect: '',
  },
  {
    searchName: 'Reading',
    Redirect: '',
  },

  {
    searchName: 'Adventure',
    Redirect: '',
  },
  {
    searchName: 'All',
    Redirect: '',
  },
  {
    searchName: 'Today',
    Redirect: '',
  },
  {
    searchName: 'This weekend',
    Redirect: '',
  },
];
const SearchBarFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Box
        bg="#FFFFFF"
        pr="12px"
        w={'290px'}
        borderRadius={'10px'}
        justifyContent={'space-between'}
        display={'flex'}
      >
        <Input
          onClick={() => setIsOpen(!isOpen)}
          w="63%"
          placeholder="Search"
          bg="none"
          border={'none'}
          _focusVisible={{ border: 'none' }}
        />
        <Flex gap="10px " alignItems={'center'}>
          <Image alt="img" src="/saerchbaricon.svg"></Image>
          <Box bg="rgba(166, 166, 166, 0.28)" w="1px" h="22px"></Box>

          <Image alt="img" src="/filtericons.svg"></Image>
        </Flex>
      </Box>
      {isOpen && (
        <Box
          position={'absolute'}
          top="110px"
          left={'0px'}
          w="100%"
          bg="#FFFFFF"
          p="40px"
        >
          <Grid
            templateColumns={{
              base: 'repeat(2, 1fr)',
              sm: 'repeat(4, 1fr)',
              md: 'repeat(5, 1fr)',
              lg: 'repeat(10, 1fr)',
            }}
            w="100%"
            gap="32px"
          >
            {data.map((li, index) => (
              <Button
                as={Link}
                href={li.Redirect}
                key={index}
                bg="#F2F2F2"
                colorScheme={'#F2F2F2'}
                color="#B8B8B8"
                fontSize="10px"
                fontWeight="400"
                lineHeight={'150%'}
                _hover={{ bg: '#1F1F1F', color: 'white' }}
                borderRadius={'50px'}
                maxW={'142px'}
                w="100%"
                display={'flex'}
                justifyContent={'center'}
              >
                {li.searchName}
              </Button>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default SearchBarFilter;
