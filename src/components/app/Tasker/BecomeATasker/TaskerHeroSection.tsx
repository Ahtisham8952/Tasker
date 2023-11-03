import { Box, Flex, Text, Image, Button, Link } from '@chakra-ui/react';
import React from 'react';
import AreaDropdown from './AreaDropdown';
import ChoseCategoryDropdown from './ChoseCategoryDropdown';

const TaskerHeroSection = () => {
  return (
    <>
      <Flex
        justifyContent={'space-between'}
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={{
          base: '30px',
          md: '40px',
          lg: '40px',
          xl: '50px',
          xxl: '100px',
        }}
      >
        <Box w={{ base: '100%', lg: '50%' }}>
          <Image
            w="100%"
            h="100%"
            objectFit={'cover'}
            alt="img"
            src="tasker/taskerhero1.png"
          ></Image>
        </Box>
        <Box w={{ base: '100%', lg: '50%' }}>
          <Text
            fontWeight="600"
            fontSize={{
              base: '24px',
              md: '26px',
              lg: '28px',
              xl: '32px',
              xxl: '34px',
              xxxl: '36px',
            }}
            lineHeight="150% "
            color="#000000"
          >
            Earn money your way
          </Text>
          <Text
            fontWeight="400"
            fontSize={{
              base: '16px',
              md: '18px',
              lg: '20px',
            }}
            lineHeight="150% "
            color="rgba(0, 0, 0, 0.8)"
            maxW={'339px'}
          >
            See how much you can make tasking on TaskRabbit
          </Text>
          <AreaDropdown />
          <ChoseCategoryDropdown />
          <Text
            fontWeight="600"
            fontSize={{
              base: '24px',
              md: '26px',
              lg: '28px',
              xl: '32px',
              xxl: '34px',
              xxxl: '36px',
            }}
            lineHeight="150% "
            color="#000000"
          >
            $38 per hour
          </Text>
          <Button
            my="24px"
            bg="#1F4A40"
            colorScheme="#1F4A40"
            borderRadius={'10px'}
            w="100%"
            py="25px"
            mx="auto"
            h="73px"
            fontSize={'32px'}
          >
            Get started
          </Button>
          <Flex justifyContent={'center'} alignItems={'center'}>
            <Text
              fontWeight="400"
              fontSize={{
                base: '16px',
                md: '18px',
                lg: '20px',
              }}
              lineHeight="150% "
              color="rgba(0, 0, 0, 0.8)"
              maxW={'339px'}
            >
              Already have an account?
            </Text>
            <Link
              href="/login"
              fontWeight="400"
              fontSize={{
                base: '16px',
                md: '18px',
                lg: '20px',
              }}
              lineHeight="150% "
              color="#5BBB7B"
            >
              Sign in
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default TaskerHeroSection;
