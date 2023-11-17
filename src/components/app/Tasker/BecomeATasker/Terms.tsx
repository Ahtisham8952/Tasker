import React from 'react';
import {
  Box,
  Image,
  Text,
  Link,
  Checkbox,
  Flex,
  Button,
} from '@chakra-ui/react';

const Terms = () => {
  return (
    <>
      <Box maxW={'1740px'} w="100%" px="20px" mx="auto">
        <Box my="60px">
          <Image alt="img" src="/tasker/taskerlogo.png"></Image>
        </Box>
        <Box>
          <Text
            mb="20px"
            fontWeight="700"
            fontSize={{
              base: '14px',
              md: '16px',
              lg: '22px',
              xl: '24px',
              xxl: '32px',
              xxxl: '40px',
            }}
            lineHeight="150% "
            color="#1F1F1F"
          >
            Being Your Own Boss
          </Text>

          <Text
            mb="20px"
            fontWeight="400"
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
            There are many advantages of being a Tasker, you can make extra
            money, control your own schedule, market yourself, find new clients,
            be your own boss.
          </Text>

          <Text
            mb="20px"
            fontWeight="400"
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
            You are your own business and will be working as an independent
            contractor for your Clients that you connect with on the Tasker
            platform. You are not an employee of Tasker. We don't supervise,
            direct or control your work - you are responsible for how you
            present yourself to your Clients.
          </Text>
          <Text
            mb="20px"
            fontWeight="400"
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
            Our Terms of Service govern the use of the Tasker platform by all
            Users. please read them. We are looking forward to having you join
            us on the platform so let's get started
          </Text>
          <Text
            mb="20px"
            fontWeight="600"
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
            I acknowledge that I have read and understood the Terms of Service
            and Privacy Policy, and that I agree to the
            <Link color="#1F4A40" mx="5px">
              Terms of Service
            </Link>
            and
            <Link color="#1F4A40" mx="5px">
              Privacy Policy.
            </Link>
          </Text>
          <Checkbox defaultChecked>I agree</Checkbox>
        </Box>
        <Flex justifyContent={'flex-end'}>
          <Button as={Link} href="/tasker/about-yourself" colorScheme="#1F4A40" bg="#1F4A40" mt={4}>
            Continue
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Terms;
