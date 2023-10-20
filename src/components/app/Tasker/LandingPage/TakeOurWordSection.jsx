import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import ReviewSlider from './ReviewSlider';
const TakeOurWordSection = () => {
  return (
    <>
      <Box py={{ base: '30px', lg: '60px' }}>
        <Flex
          alignItems={'center'}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Box w={{ base: '100%', lg: '60%' }}>
            <Box>
              <Text
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
                color="#000000"
              >
                Don't just take our word for it
              </Text>
              <Text
                fontWeight="400"
                fontSize="24px"
                lineHeight="150% "
                color="#1F1F1F"
              >
                See how Taskers are saving the day for people like you.
              </Text>
            </Box>
            <Flex
              gap="10px"
              mt="50px"
              alignItems={'center'}
              justifyContent={'space-between'}
              flexDirection={{ base: 'column', sm: 'row' }}
            >
              <Box>
                <Text
                  fontWeight="700"
                  fontSize={{
                    base: '16px',
                    md: '18px',
                    xl: '22px',
                    xxl: '22px',
                    xxxl: '32px',
                  }}
                  lineHeight="150% "
                  color="#1F1F1F"
                >
                  49/5
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
                  maxW={'293px'}
                >
                  See how Taskers are saving the day for people like you.
                </Text>
              </Box>
              <Box>
                <Text
                  fontWeight="700"
                  fontSize={{
                    base: '16px',
                    md: '18px',
                    xl: '22px',
                    xxl: '22px',
                    xxxl: '32px',
                  }}
                  lineHeight="150% "
                  color="#1F1F1F"
                >
                  99%
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
                  maxW={'293px'}
                >
                  95% of customers are satisfied through to see their
                  freelancers
                </Text>
              </Box>
              <Box>
                <Text
                  fontWeight="700"
                  fontSize={{
                    base: '16px',
                    md: '18px',
                    xl: '22px',
                    xxl: '22px',
                    xxxl: '32px',
                  }}
                  lineHeight="150% "
                  color="#1F1F1F"
                  textAlign={'left'}
                >
                  Award winner
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
                  textAlign={'left'}
                >
                  Home ownership
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box w={{ base: '100%', lg: '40%' }}>
            <ReviewSlider />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default TakeOurWordSection;
