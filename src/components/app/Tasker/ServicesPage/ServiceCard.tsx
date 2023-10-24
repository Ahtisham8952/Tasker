import { Box, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ServiceCard = ({ data }) => {
  return (
    <>
      <Box>
        <Grid
          mb="30px"
          gap="24px"
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(3, 1fr)',
          }}
          w="100%"
        >
          <Box>
            <Image src={data?.CardImage}></Image>
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
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default ServiceCard;
