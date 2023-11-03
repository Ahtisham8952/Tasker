import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import LayoutWrapper from '../../../core/LayoutWrapper/LayoutWrapper';

import TaskerHeroSection from './TaskerHeroSection';
const WorksSec = [
  {
    Image: '/tasker/boss1.svg',
    Name: ' Be your own boss',
    Description:
      '  Work how, when, and where you want. Offer services in 50+ categories and set a flexible schedule and work area.',
  },
  {
    Image: '/tasker/boss2.svg',
    Name: 'Set your own rates',
    Description:
      '  Work how, when, and where you want. Offer services in 50+ categories and set a flexible schedule and work area.',
  },
  {
    Image: '/tasker/boss3.svg',
    Name: ' Grow your business',
    Description:
      '  We connect you with clients in your area, and ways to market yourself — so you can focus on what you do best.',
  },
];
const GettingStarted = [
  {
    Image: '/tasker/start1.svg',
    Name: ' 1. Sign up',
    Description:
      ' Create your account. Then download the Tasker app to continue registration.',
  },
  {
    Image: '/tasker/start2.svg',
    Name: ' 2. Build your profile',
    Description: ' Select what services you want to offer and where.',
  },
  {
    Image: '/tasker/start3.svg',
    Name: ' 3. Verify your eligibility to task',
    Description:
      ' Confirm your identity and submit business verifications, as required.',
  },
  {
    Image: '/tasker/start4.svg',
    Name: ' 4. Pay registration fee',
    Description:
      '  In applicable cities, we charge a $25 registration fee that helps us provide the best service to you.',
  },
  {
    Image: '/tasker/start5.svg',
    Name: ' 5. Set your schedule and work area',
    Description:
      'Set your weekly availability and opt in to receive same-day jobs.',
  },
  {
    Image: '/tasker/start6.svg',
    Name: ' 6. Start getting jobs',
    Description: ' Grow your business on your own terms.',
  },
];
const Questions = [
  {
    question: 'Whats required to become a tasker?',
  },
  {
    question: 'Do I need experience to task?',
  },
  {
    question: 'How do I get jobs',
  },
  {
    question: 'How do I get paid?',
  },
  {
    question: 'Where does tasker operate?',
  },
  {
    question: 'What categories can I task in on Tasker',
  },
  {
    question: 'How long does it take for my registration to be processed?',
  },
];
const TaskerMain = () => {
  return (
    <>
      <LayoutWrapper>
        <Box
          pt={{ base: '50px', lg: '100px' }}
          maxW={'1760px'}
          mx={'auto'}
          px="20px"
        >
          <Box mb={{ base: '30px', md: '30px', lg: '40px', xxl: '100px' }}>
            <TaskerHeroSection />
          </Box>
          <Flex justifyContent={'center'} mb="74px">
            <Image src="/tasker/gapdredline.svg"></Image>
          </Flex>
          <Flex justifyContent={'center'}>
            <Box>
              <Text
                fontWeight="600"
                fontSize={{
                  base: '24px',
                  md: '26px',
                  lg: '28px',
                  xl: '34px',
                  xxl: '34px',
                  xxxl: '40px',
                }}
                lineHeight="150% "
                color="#000000"
              >
                Flexible work, at your fingertips
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
                maxW={'562px'}
                textAlign={'center'}
              >
                Find local jobs that fit your skills and schedule. With Tasker,
                you have the freedom and support to be your own boss.
              </Text>
            </Box>
          </Flex>
          <Box>
            <Grid
              py={{ base: '20px', md: '40px' }}
              mb="30px"
              gap="24px"
              templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(3, 1fr)',
                xl: 'repeat(3, 1fr)',
              }}
              w="100%"
            >
              {WorksSec?.map((li, index) => (
                <Box key={index}>
                  <Image mx="auto" alt="img" src={li.Image}></Image>
                  <Text
                    textAlign={'center'}
                    fontWeight="600"
                    fontSize={{
                      base: '16px',
                      md: '18px',
                      lg: '21px',
                      xl: '28px',
                    }}
                    lineHeight="150% "
                    color="#1F1F1F"
                    my="10px"
                  >
                    {li.Name}
                  </Text>
                  <Text
                    textAlign={'center'}
                    maxW={'500px'}
                    fontWeight="500"
                    fontSize={{ base: '14px', md: '16px' }}
                    lineHeight="150% "
                    color="#1F1F1F"
                    mx="auto"
                  >
                    {li.Description}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>
          <Box>
            <Flex
              justifyContent={'space-between'}
              flexDirection={{ base: 'column-reverse', lg: 'row' }}
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
                  src="tasker/taskerguy.png"
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
                  What is Tasker?
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
                  maxW={'597px'}
                >
                  Tasker connects busy people in need of help with trusted local
                  Taskers who can lend a hand with everything from home repairs
                  to errands. As a Tasker, you can get paid to do what you love,
                  when and where you want — all while saving the day for someone
                  in your city.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Flex justifyContent={'center'} my={{ base: '20px', md: '60px' }}>
            <Image src="/tasker/gapdredline.svg"></Image>
          </Flex>
          <Box>
            <Text
              mb={{ base: '20px', md: '30px', lg: '60px' }}
              fontWeight="600"
              fontSize={{
                base: '24px',
                md: '26px',
                lg: '28px',
                xl: '34px',
                xxl: '34px',
                xxxl: '40px',
              }}
              lineHeight="150% "
              color="#000000"
              textAlign={'center'}
            >
              Getting Started
            </Text>
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
              {GettingStarted?.map((li, index) => (
                <Box key={index}>
                  <Image alt="img" src={li.Image}></Image>
                  <Text
                    fontWeight="600"
                    fontSize={{
                      base: '16px',
                      md: '18px',
                      lg: '21px',
                      xl: '28px',
                    }}
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
          <Box my={{ base: '20px', md: '40px', lg: '60px' }}>
            <Flex
              justifyContent={'space-between'}
              flexDirection={{ base: 'column', lg: 'row' }}
              alignItems={'center'}
              gap={{
                base: '30px',
                md: '40px',
                lg: '40px',
                xl: '50px',
                xxl: '100px',
              }}
            >
              <Box w={{ base: '100%', lg: '50%' }}>
                <Image src="/tasker/qoutes.svg"></Image>
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
                  I love TaskRabbit! I was able to get out of debt, tackle
                  bills, provide for my family, and still have enough room to
                  save for future goals.
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
                  maxW={'597px'}
                >
                  Karsheem W., New York, NY
                </Text>
              </Box>
              <Box w={{ base: '100%', lg: '50%' }}>
                <Image
                  w="100%"
                  h="100%"
                  objectFit={'cover'}
                  alt="img"
                  src="tasker/thirdlasts.png"
                ></Image>
              </Box>
            </Flex>
          </Box>
          <Flex justifyContent={'center'} my={{ base: '20px', md: '60px' }}>
            <Image src="/tasker/gapdredline.svg"></Image>
          </Flex>
          <Box my={{ base: '30px', md: '60px' }}>
            <Text
              mb={{ base: '20px', md: '40px' }}
              fontWeight="600"
              fontSize={{
                base: '24px',
                md: '26px',
                lg: '28px',
                xl: '34px',
                xxl: '34px',
                xxxl: '40px',
              }}
              lineHeight="150% "
              color="#000000"
              textAlign={'center'}
            >
              Your questions, answered
            </Text>
            <Grid
              mb="30px"
              gap="24px"
              templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(2, 1fr)',
                xl: 'repeat(2, 1fr)',
              }}
              w="100%"
            >
              {Questions?.map((li, index) => (
                <Box
                  pb="15px"
                  borderBottom={'1px solid #E7E7E7'}
                  w={{ base: '100%', md: 'max-content' }}
                >
                  <Text
                    cursor={'pointer'}
                    fontWeight="500"
                    fontSize={{
                      base: '18px',
                      md: '18px',
                      lg: '20px',
                      xl: '22px',
                      xxl: '24px',
                      xxxl: '24px',
                    }}
                    lineHeight="150% "
                    color="#1F4A40"
                  >
                    {li.question}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box
          bgImage="url('/tasker/drillmachine.png')" // Replace 'path/to/your/image.jpg' with the actual path to your image file
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          h="449px"
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Text
              textAlign={'center'}
              fontWeight="600"
              fontSize={{
                base: '24px',
                md: '26px',
                lg: '28px',
                xl: '34px',
                xxl: '34px',
                xxxl: '40px',
              }}
              lineHeight="150% "
              color="#FFFFFF"
            >
              Ready to make money your way?
            </Text>
            <Button
              my="24px"
              bg="#1F4A40"
              colorScheme="#1F4A40"
              borderRadius={'10px'}
              py="18px "
              px={{ base: '40px', md: '79px' }}
              h="64px"
              fontSize={'32px'}
            >
              Get started
            </Button>
          </Box>
        </Box>
      </LayoutWrapper>
    </>
  );
};

export default TaskerMain;
