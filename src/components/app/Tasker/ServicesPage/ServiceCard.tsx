import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

const ServiceCard = ({ data }) => {
  return (
    <Box mb="30px">
      <Image alt="img" src={data?.CardImage}></Image>
      <Text
        fontWeight="700"
        fontSize={{
          base: '18px',
          md: '18px',
          lg: '20px',
          xl: '22px',
          xxl: '24px',
          xxxl: '32px',
        }}
        lineHeight="150% "
        color="#1F1F1F"
      >
        {data?.CardHeading}
      </Text>
      <Text
        fontWeight="500"
        fontSize={{
          base: '14px',
          md: '16px',
          lg: '20px',
        }}
        lineHeight="150% "
        color="#1F1F1F"
      >
        {data?.CardDescription}
      </Text>
      <Box mt="30px">
        {data?.pragraphs?.map((pragraph, index) => (
          <Text
            key={index}
            mb="10px"
            color="#1F4A40"
            fontSize="24px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
          >
            {pragraph?.pragraphText}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default ServiceCard;
