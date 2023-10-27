import { Box, Link, Image, Button, Container, Flex } from '@chakra-ui/react';

import React from 'react';

import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <>
      <Box
        py={{ base: '6px', md: '15px' }}
        bg="#1F4A40"
        position={'relative'}
        boxShadow={'0 -6px 10px 5px rgba(0,0,0,0.5)'}
      >
        <Container maxW={'1760px'} px="20px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            gap="20px"
            pt="30px"
          >
            <Flex>
              <Link
                href="/"
                maxW={{ sm: '128px', base: '100px' }}
                ml={{ sm: '16px', base: '15px' }}
                textDecoration="none !important"
                position="relative"
                mt={{ base: '6px', md: '2px' }}
              >
                <Image
                  h={{ base: '20px', md: '28px' }}
                  w={{ base: '50px', md: '103px' }}
                  src="/header/TechLogo.png"
                  alt="logo"
                />
              </Link>
            </Flex>

            <Flex alignItems={'center'} display={{ lg: 'flex', base: 'none' }}>
              <Flex
                w="100%"
                justifyContent={'space-between'}
                mr="43px"
                gap="58px"
              >
                <Box pb="4px" minWidth={'3px'}>
                  <Link
                    href="/location"
                    color="white"
                    _hover={{ textDecoration: 'none' }}
                    fontSize="16px"
                    fontWeight="500"
                    lineHeight={'24px'}
                  >
                    Location
                  </Link>
                </Box>
                <Box
                  pb="4px"
                  color="white"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight={'24px'}
                >
                  <Link href="/services" _hover={{ textDecoration: 'none' }}>
                    Services
                  </Link>
                </Box>
                <Box
                  pb="4px"
                  color="white"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight={'24px'}
                >
                  <Link href="/login" _hover={{ textDecoration: 'none' }}>
                    Sign up / Log in
                  </Link>
                </Box>
              </Flex>
              <Box display={{ lg: 'flex', base: 'none' }}>
                <Button
                  colorScheme="#5BBB7B"
                  bg="#5BBB7B"
                  p="14px 22px"
                  color="white"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight={'24px'}
                  borderRadius={'40px'}
                >
                  Become a Tasker
                </Button>
              </Box>
            </Flex>

            <Box display={{ lg: 'none', base: 'block' }}>
              <MobileMenu />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
