import { Box, Image, Text, Flex, Input } from '@chakra-ui/react';
import React from 'react';
import WorkMenu from './WorkMenu';

const TaskerRegistration = () => {
  return (
    <>
      <Box maxW={'1740px'} w="100%" px="20px" mx="auto">
        <Box my="60px">
          <Image alt="img" src="/tasker/taskerlogo.png"></Image>
        </Box>
        <Box pb="20px" borderBottom={'1px solid rgba(197, 187, 187, 0.72)'}>
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
            Tell us about yourself
          </Text>
        </Box>
        <Flex gap="40px" alignItems={'center'} my="40px" flexDirection={{base:'column',md:'row'}}>
          <Box position={'relative'}>
            <Box position={'absolute'} top="0px" opacity={'0'} h="100%">
              <Input type="file" w="100%" h="100%" />
            </Box>

            <Image alt="img" src="/tasker/emptyimage.svg"></Image>
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
              Add Photo
            </Text>
          </Box>
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
              Upload a clear, professional photo of only yourself to increase
              your likelihood of being hired.
            </Text>
          </Box>
        </Flex>
        <Box>
          <Text
            mb="20px"
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
            What would you like to work in?
          </Text>
          <WorkMenu />
        </Box>
        <Box mt="20px">
          <Text
            mb="20px"
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
            Home Address
          </Text>
          <Box>
            <Flex gap={{base:'12px',md:'30px'}} my="20px" flexDirection={{base:'column',md:'row'}}>
              <Box w={{base:'100%',md:'20%'}}>
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
                  Street Address
                </Text>
              </Box>
              <Box w={{base:'100%',md:'50%'}}>
                <Input
                  border="1px solid #BDBABA"
                  placeholder="ex: 123 Main St."
                />
              </Box>
            </Flex>
            <Flex gap={{base:'12px',md:'30px'}} my="20px" flexDirection={{base:'column',md:'row'}}>
              <Box w={{base:'100%',md:'20%'}}>
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
                  Apt/ Unit Number
                </Text>
              </Box>
              <Box w={{base:'100%',md:'50%'}}>
                <Input border="1px solid #BDBABA" placeholder="ex: Apt. 8" />
              </Box>
            </Flex>
            <Flex gap={{base:'12px',md:'30px'}} my="20px" flexDirection={{base:'column',md:'row'}}>
              <Box w={{base:'100%',md:'20%'}}>
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
                  Town/City
                </Text>
              </Box>
              <Box w={{base:'100%',md:'50%'}}>
                <Input
                  border="1px solid #BDBABA"
                  placeholder="ex: San Francisco"
                />
              </Box>
            </Flex>
            <Flex gap={{base:'12px',md:'30px'}} my="20px" flexDirection={{base:'column',md:'row'}}>
              <Box w={{base:'100%',md:'20%'}}>
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
                 State
                </Text>
              </Box>
              <Box w={{base:'100%',md:'50%'}}>
                <Input
                  border="1px solid #BDBABA"
                  placeholder=""
                />
              </Box>
            </Flex>
            <Flex gap={{base:'12px',md:'30px'}} my="20px" flexDirection={{base:'column',md:'row'}}>
              <Box w={{base:'100%',md:'20%'}}>
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
                Zip Code
                </Text>
              </Box>
              <Box w={{base:'100%',md:'50%'}}>
                <Input
                  border="1px solid #BDBABA"
                  placeholder="ex: 94105"
                />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TaskerRegistration;
