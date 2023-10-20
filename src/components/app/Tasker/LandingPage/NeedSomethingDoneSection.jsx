import React from 'react';
import { Box, Grid, Text, Image } from '@chakra-ui/react';
const MainSection = [
  {
    Image: '/header/somehing1.svg',
    Name: ' Post a job',
    Description:
      '  It’s free and easy to post a job. Simply fill in a title, description.',
  },
  {
    Image: '/header/somehing2.svg',
    Name: ' Choose freelancers',
    Description:
      '  It’s free and easy to post a job. Simply fill in a title, description.',
  },
  {
    Image: '/header/somehing3.svg',
    Name: ' Pay safely',
    Description:
      '  It’s free and easy to post a job. Simply fill in a title, description.',
  },
  {
    Image: '/header/somehing4.svg',
    Name: ' We’re here to help',
    Description:
      '  It’s free and easy to post a job. Simply fill in a title, description.',
  },
];
const NeedSomethingDoneSection = () => {
  return (
    <>
      <Box>
        <Box mb="50px">
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
            color="#1F1F1F"
          >
            Need something done?
          </Text>
        </Box>

        <Grid
          mb="30px"
          gap="24px"
          templateColumns={{
            base: 'repeat(2, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          w="100%"
        >
          {MainSection?.map((li, index) => (
            <Box key={index}>
              <Image alt="img" src={li.Image}></Image>
              <Text
                fontWeight="600"
                fontSize={{ base: '16px', md: '18px', lg: '21px', xl: '28px' }}
                lineHeight="150% "
                color="#1F1F1F"
                my="10px"
              >
                {li.Name}
              </Text>
              <Text
                maxW={'327px'}
                fontWeight="500"
                fontSize={{ base: '14px', md: '16px' }}
                lineHeight="150% "
                color="#1F1F1F"
              >
                {li.Description}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default NeedSomethingDoneSection;
