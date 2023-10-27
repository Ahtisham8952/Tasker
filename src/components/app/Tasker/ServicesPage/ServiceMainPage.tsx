import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import LayoutWrapper from '../../../core/LayoutWrapper/LayoutWrapper';

import ServicesBanner from './ServicesBanner';
import ServiceCard from './ServiceCard';
const Services = [
  {
    CardImage: '/tasker/serviceimg1.png',
    CardHeading: 'Furnitured Task',
    CardDescription: 'Hire a Tasker for help around the house',
    pragraphs: [
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'TV Mounting' },
      {
        pragraphText: 'Home Repairs',
      },
      { pragraphText: 'Help Moving' },
      {
        pragraphText: 'Heavy Lifting',
      },
      { pragraphText: 'Home Cleaning' },
      { pragraphText: 'Spring Cleaning' },
      { pragraphText: 'Personal Assistant' },
      { pragraphText: 'Hang Picture' },
    ],
  },
  {
    CardImage: '/tasker/serviceimg2.png',
    CardHeading: 'Handyman',
    CardDescription: 'Hire a Tasker for help around the house',
    pragraphs: [
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'TV Mounting' },
      {
        pragraphText: 'Home Repairs',
      },
      { pragraphText: 'Help Moving' },
      {
        pragraphText: 'Heavy Lifting',
      },
      { pragraphText: 'Home Cleaning' },
      { pragraphText: 'Spring Cleaning' },
      { pragraphText: 'Personal Assistant' },
      { pragraphText: 'Hang Picture' },
    ],
  },
  {
    CardImage: '/tasker/serviceimg3.png',
    CardHeading: 'Moving Services',
    CardDescription: 'Hire a Tasker for help around the house',
    pragraphs: [
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'TV Mounting' },
      {
        pragraphText: 'Home Repairs',
      },
      { pragraphText: 'Help Moving' },
      {
        pragraphText: 'Heavy Lifting',
      },
      { pragraphText: 'Home Cleaning' },
      { pragraphText: 'Spring Cleaning' },
      { pragraphText: 'Personal Assistant' },
      { pragraphText: 'Hang Picture' },
    ],
  },
  {
    CardImage: '/tasker/serviceimg4.png',
    CardHeading: 'Moving Services',
    CardDescription: 'Hire a Tasker for help around the house',
    pragraphs: [
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'TV Mounting' },
      {
        pragraphText: 'Home Repairs',
      },
      { pragraphText: 'Help Moving' },
      {
        pragraphText: 'Heavy Lifting',
      },
      { pragraphText: 'Home Cleaning' },
      { pragraphText: 'Spring Cleaning' },
      { pragraphText: 'Personal Assistant' },
      { pragraphText: 'Hang Picture' },
    ],
  },
  {
    CardImage: '/tasker/serviceimg5.png',
    CardHeading: 'Moving Services',
    CardDescription: 'Hire a Tasker for help around the house',
    pragraphs: [
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'TV Mounting' },
      {
        pragraphText: 'Home Repairs',
      },
      { pragraphText: 'Help Moving' },
      {
        pragraphText: 'Heavy Lifting',
      },
      { pragraphText: 'Home Cleaning' },
      { pragraphText: 'Spring Cleaning' },
      { pragraphText: 'Personal Assistant' },
      { pragraphText: 'Hang Picture' },
    ],
  },
  {
    CardImage: '/tasker/serviceimg6.png',
    CardHeading: 'Moving Services',
    CardDescription: 'Hire a Tasker for help around the house',
    pragraphs: [
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'TV Mounting' },
      {
        pragraphText: 'Home Repairs',
      },
      { pragraphText: 'Help Moving' },
      {
        pragraphText: 'Heavy Lifting',
      },
      { pragraphText: 'Home Cleaning' },
      { pragraphText: 'Spring Cleaning' },
      { pragraphText: 'Personal Assistant' },
      { pragraphText: 'Hang Picture' },
    ],
  },
  {
    CardImage: '/tasker/serviceimg7.png',
    CardHeading: 'Moving Services',
    CardDescription: 'Hire a Tasker for help around the house',
    pragraphs: [
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'TV Mounting' },
      {
        pragraphText: 'Home Repairs',
      },
      { pragraphText: 'Help Moving' },
      {
        pragraphText: 'Heavy Lifting',
      },
      { pragraphText: 'Home Cleaning' },
      { pragraphText: 'Spring Cleaning' },
      { pragraphText: 'Personal Assistant' },
      { pragraphText: 'Hang Picture' },
    ],
  },
  {
    CardImage: '/tasker/serviceimg8.png',
    CardHeading: 'Moving Services',
    CardDescription: 'Hire a Tasker for help around the house',
    pragraphs: [
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'TV Mounting' },
      {
        pragraphText: 'Home Repairs',
      },
      { pragraphText: 'Help Moving' },
      {
        pragraphText: 'Heavy Lifting',
      },
      { pragraphText: 'Home Cleaning' },
      { pragraphText: 'Spring Cleaning' },
      { pragraphText: 'Personal Assistant' },
      { pragraphText: 'Hang Picture' },
    ],
  },
  {
    CardImage: '/tasker/serviceimg7.png',
    CardHeading: 'Moving Services',
    CardDescription: 'Hire a Tasker for help around the house',
    pragraphs: [
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'TV Mounting' },
      {
        pragraphText: 'Home Repairs',
      },
      { pragraphText: 'Help Moving' },
      {
        pragraphText: 'Heavy Lifting',
      },
      { pragraphText: 'Home Cleaning' },
      { pragraphText: 'Spring Cleaning' },
      { pragraphText: 'Personal Assistant' },
      { pragraphText: 'Hang Picture' },
    ],
  },
];
const ServiceMainPage = () => {
  return (
    <>
      <LayoutWrapper>
        <Box bg="white">
          <ServicesBanner />
          <Box
            pt={{ base: '50px', lg: '100px' }}
            maxW={'1760px'}
            mx={'auto'}
            px="20px"
          >
            <Grid
              mb="30px"
              gap="24px"
              templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
                xl: 'repeat(3, 1fr)',
              }}
              w="100%"
            >
              {Services.map((info, index) => {
                return <ServiceCard data={info} key={index} />;
              })}
            </Grid>
            <Box mt={{ base: '30px', lg: '60px' }}>
              <Flex
                gap="20px"
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box w={{ base: '100%', md: '40%' }}>
                  <Image
                    alt="img"
                    mb="30px"
                    mx="auto"
                    src="/tasker/britcologo.svg"
                  ></Image>
                  <Text
                    textAlign={'center'}
                    fontWeight="400"
                    fontSize={{
                      base: '14px',
                      md: '16px',
                      lg: '20px',
                      xl: '24px',
                    }}
                    lineHeight="150% "
                    color="#1F1F1F"
                  >
                    “Tasker is arguably the best thing to come out of the modern
                    day tech revolution. Hiring a Tasker can really help make
                    every facet of your life a breeze.”
                  </Text>
                </Box>
                <Box w={{ base: '100%', md: '40%' }}>
                  <Image
                    alt="img"
                    mb="30px"
                    mx="auto"
                    src="/tasker/newyorlogo.svg"
                  ></Image>
                  <Text
                    textAlign={'center'}
                    fontWeight="400"
                    fontSize={{
                      base: '14px',
                      md: '16px',
                      lg: '20px',
                      xl: '24px',
                    }}
                    lineHeight="150% "
                    color="#1F1F1F"
                  >
                    “Tasker is arguably the best thing to come out of the modern
                    day tech revolution. Hiring a Tasker can really help make
                    every facet of your life a breeze.”
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </LayoutWrapper>
    </>
  );
};

export default ServiceMainPage;
