import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';

const TaskerCard = () => {
  return (
    <>
      <Box border="1px solid #B9B9B9" borderRadius="5px" p="30px">
        <Flex justifyContent={'space-between'} gap="40px">
          <Box w="30%">
            <Image mb="20px" alt='img' src="/tasker/taskerimg1.png"></Image>
            <Box mb="20px">
              <Text
                fontWeight="700"
                fontSize={{
                  base: '14px',
                  md: '16px',
                  lg: '16px',
                }}
                lineHeight="150% "
                color="#1F4A40"
              >
                View Profile & Reviews
              </Text>
            </Box>
            <Box>
              <Button mb="20px" colorScheme="#1F4A40" bg="#1F4A40">
                Select & Continue
              </Button>
            </Box>
            <Text
              textAlign={'center'}
              fontWeight="500"
              fontSize={{
                base: '14px',
                md: '16px',
                lg: '16px',
              }}
              lineHeight="150% "
              color="rgba(0, 0, 0, 0.6)"
            >
              You can chat with your Tasker, adjust task details, or change task
              time after booking.
            </Text>
          </Box>
          <Box w="70%">
            <Box>
              <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Text
                  fontWeight="500"
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
                  Paul L.
                </Text>
                <Text
                  fontWeight="500"
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
                  $40.40/hr
                </Text>
              </Flex>
              <Box
                pb="20px"
                borderBottom="1px solid rgba(124, 124, 124, 1)"
                mb="20px"
              >
                <Flex gap="20px" alignItems={'center'} mb="10px">
                  <CheckCircleIcon />
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
                    80 Furniture Assembly Tasks
                  </Text>
                </Flex>
                <Flex gap="20px" alignItems={'center'}>
                  <StarIcon />
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
                    4.9 (39 reviews)
                  </Text>
                </Flex>
                <Flex gap="20px" alignItems={'center'}>
                  <Image alt="img" src="/tasker/customvehivle.svg"></Image>
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
                    Vehicle: Minivan/SUV
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Text
                  fontWeight="600"
                  fontSize={{
                    base: '18px',
                    md: '20px',
                    lg: '24px',
                  }}
                  lineHeight="150% "
                  color="#1F1F1F"
                >
                  How I can help:
                </Text>
                <Text
                  textAlign={'center'}
                  fontWeight="500"
                  fontSize={{
                    base: '14px',
                    md: '16px',
                    lg: '20px',
                  }}
                  lineHeight="150% "
                  color="#1F1F1F"
                >
                  I will bring all of the necessary tools to assemble your
                  furniture efficiently and professionally so you can be
                  confident it was done the right way!
                </Text>
                <Text
                  fontWeight="500"
                  fontSize={{
                    base: '14px',
                    md: '16px',
                    lg: '20px',
                  }}
                  lineHeight="150% "
                  color="#5BBB7B"
                >
                  Read more
                </Text>
              </Box>
              <Box>
                <Flex gap="30px" alignItems={'center'} mt="30px">
                  <Image src="/tasker/revieverimg.png"></Image>
                  <Box>
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
                       Very professional and meticulous 
                    </Text>
                    <Text
                      fontWeight="500"
                      fontSize={{
                        base: '14px',
                        md: '16px',
                        lg: '20px',
                      }}
                      lineHeight="150% "
                      color="#1F4A40"
                    >
                      Rayan D. - August 12, 2023
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default TaskerCard;
