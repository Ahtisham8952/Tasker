import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

const CitiesComponent = ({ Cities }) => {
  return Cities.map((li, index) => (
    <Box key={index}>
      <Image alt="img" mb="10px" mx="auto" src={li.CityImage} />
      <Text
        textAlign={'center'}
        fontWeight="500"
        fontSize={{
          base: '14px',
          md: '16px',
          lg: '20px',
        }}
        lineHeight="150%"
        color="#1F1F1F"
      >
        {li.CityName}
      </Text>
    </Box>
  ));
};

export default CitiesComponent;
