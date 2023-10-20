import React from 'react';
import { TriangleDownIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Link,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';

const AfterLoginMenu = ({ userName }: { userName: string }) => {
  return (
    <>
      <Box
        position="relative"
        width="24px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Popover placement="top-end">
          <PopoverTrigger>
            <Box
              bg="transparent"
              color="#FFF"
              as={Button}
              p="0"
              rightIcon={
                <TriangleDownIcon color={'#3F434A'} fontSize={'10px'} />
              }
              _hover={{ bg: 'transparent' }}
              _active={{ bg: 'transparent' }}
            >
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                fontSize="14px"
                gap="8px"
              >
                <Box
                  border="1px solid #FFFFFF"
                  borderRadius="50%"
                  height={{ sm: '32px', base: '26px' }}
                  width={{ sm: '32px', base: '26px' }}
                  background="#C4C4C4"
                  position="relative"
                >
                  <Image
                    src="https://cdn.enochdev.com/starget-bucket/header-menu/user-avater-img.png"
                    alt="img"
                    h="100%"
                    w="100%"
                  />
                  <Badge
                    position="absolute"
                    bg="#86CE23"
                    border="1px solid #FFFFFF"
                    borderRadius="50%"
                    top="-2px"
                    right="-2px"
                    h="12px"
                    w="12px"
                  ></Badge>
                </Box>
              </Box>
            </Box>
          </PopoverTrigger>
          <PopoverContent borderRadius={'0px'} top={'15px'} maxW="248px">
            <PopoverBody p={'0px'} borderRadius={'0px'} bg="#F7F7F7">
              <Flex
                p="16px"
                bg="#F4F8FF"
                boxShadow="0px 4px 4px rgba(226, 226, 226, 0.25)"
                justifyContent="space-between"
                alignItems="center"
              >
                <Flex gap="8px" alignItems="center">
                  <Box
                    border="1px solid #FFFFFF"
                    borderRadius="50%"
                    height={{ sm: '30px', base: '26px' }}
                    width={{ sm: '30px', base: '26px' }}
                    background="#C4C4C4"
                    position="relative"
                  >
                    <Image
                      src="https://cdn.enochdev.com/starget-bucket/header-menu/user-avater-img.png"
                      alt="img"
                      h="100%"
                      w="100%"
                    />
                    <Badge
                      position="absolute"
                      bg="#86CE23"
                      border="1px solid #FFFFFF"
                      borderRadius="50%"
                      top="-2px"
                      right="-2px"
                      h="9.5px"
                      w="9.5px"
                    ></Badge>
                  </Box>
                  <Link
                    fontWeight="700"
                    fontSize="14px"
                    lineHeight="170.23%"
                    color="#142233"
                    _hover={{ textDecoration: 'none', opacity: '0.8' }}
                  >
                    {userName}
                  </Link>
                </Flex>

                <Link
                  fontWeight="600"
                  fontSize="14px"
                  lineHeight="170.23%"
                  color="#1386F0"
                  textDecoration="underline"
                  _hover={{ opacity: '0.8' }}
                >
                  Change
                </Link>
              </Flex>

              <Box
                fontWeight="500"
                fontSize="14px"
                lineHeight="260%"
                color="#142233"
                pb="8px"
              >
                <Box
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  flexDirection="column"
                  pt="6px"
                  px="16px"
                  bg="#fff"
                >
                  <Link
                    href="#"
                    _hover={{ textDecoration: 'none', opacity: '0.8' }}
                    w="100%"
                  >
                    Your Public Profile
                  </Link>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    w="100%"
                  >
                    <Link
                      href="#"
                      _hover={{ textDecoration: 'none', opacity: '0.8' }}
                      w="100%"
                      position="relative"
                      display="flex"
                      alignItems="center"
                    >
                      Your shop
                    </Link>
                    <Button
                      padding="2px 8px"
                      border="1px solid #059669"
                      borderRadius="50px"
                      bg="transparent"
                      _hover={{ bg: 'transparent' }}
                      _active={{ bg: 'transparent' }}
                      color="#059669"
                      fontSize="11px"
                      // fontFamily="dinFonts"
                      fontWeight="700"
                      lineHeight="17px"
                      textTransform="uppercase"
                      h="auto"
                      minW="auto"
                    >
                      Upgrade
                    </Button>
                    {/* need to implement for premium member */}
                    {/* <Badge
                      fontSize="12px"
                      fontWeight="700"
                      color="#F97316"
                      bg="none"
                      p="0px"
                    >
                      Premium
                    </Badge>{" "} */}
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    w="100%"
                  >
                    <Link
                      href="#"
                      _hover={{ textDecoration: 'none', opacity: '0.8' }}
                      w="100%"
                      position="relative"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      flexWrap="wrap"
                    >
                      Follower Requests{' '}
                    </Link>
                    <Text
                      as="span"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="1px solid #F97316"
                      borderRadius="50px"
                      fontSize="12px"
                      fontWeight="600"
                      color="#F97316"
                      fontFamily="dinFonts"
                      p="2px 8px"
                      h="22px"
                    >
                      99+
                    </Text>{' '}
                  </Box>
                  <Link
                    href="#"
                    _hover={{ textDecoration: 'none', opacity: '0.8' }}
                    w="100%"
                  >
                    Invite & Earn $10
                  </Link>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    w="100%"
                  >
                    <Link
                      href="#"
                      _hover={{ textDecoration: 'none', opacity: '0.8' }}
                      w="100%"
                      position="relative"
                      display="flex"
                      alignItems="center"
                    >
                      Creator Mode
                    </Link>
                    <Button
                      padding="2px 8px"
                      border="1px solid #DC2626"
                      borderRadius="22px"
                      bg="transparent"
                      _hover={{ bg: 'transparent' }}
                      _active={{ bg: 'transparent' }}
                      color="#DC2626"
                      fontSize="12px"
                      fontWeight="700"
                      // fontFamily="dinFonts"
                      h="auto"
                      minW="auto"
                      textTransform="uppercase"
                    >
                      off
                    </Button>
                    {/* need to implement when creator mode is on */}
                    {/* <Button
                      padding="2px 8px"
                      border="1px solid #22C55E"
                      borderRadius="22px"
                      bg="transparent"
                      _hover={{ bg: "transparent" }}
                      _active={{ bg: "transparent" }}
                      color="#22C55E"
                      fontSize="12px"
                      fontWeight="700"
                      // fontFamily="dinFonts"
                      h="auto"
                      minW="auto"
                      textTransform="uppercase"
                    >
                      on
                    </Button> */}
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    w="100%"
                  >
                    <Link
                      href="#"
                      _hover={{ textDecoration: 'none', opacity: '0.8' }}
                      w="100%"
                      position="relative"
                      display="flex"
                      alignItems="center"
                    >
                      Enochian Party
                    </Link>
                    <Button
                      padding="2px 8px"
                      border="1px solid #276FB1"
                      borderRadius="50px"
                      bg="transparent"
                      _hover={{ bg: 'transparent' }}
                      _active={{ bg: 'transparent' }}
                      color="#276FB1"
                      fontSize="11px"
                      // fontFamily="dinFonts"
                      fontWeight="700"
                      lineHeight="17px"
                      textTransform="uppercase"
                      h="auto"
                      minW="auto"
                    >
                      Join now
                    </Button>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  flexDirection="column"
                  pt="6px"
                  px="16px"
                  bg="#F4F8FF"
                  fontSize="14px"
                  fontWeight="500"
                >
                  <Link
                    href="#"
                    _hover={{ textDecoration: 'none', opacity: '0.8' }}
                    w="100%"
                  >
                    Setting
                  </Link>
                  <Link
                    href="#"
                    _hover={{ textDecoration: 'none', opacity: '0.8' }}
                    w="100%"
                  >
                    Private Profile{' '}
                  </Link>
                  <Link
                    href="#"
                    _hover={{ textDecoration: 'none', opacity: '0.8' }}
                    w="100%"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="#"
                    _hover={{ textDecoration: 'none', opacity: '0.8' }}
                    w="100%"
                    color="#C2410C"
                  >
                    Logout
                  </Link>
                </Box>
              </Box>

              <Box
                fontWeight="700"
                fontSize="14px"
                lineHeight="170.23%"
                textTransform="uppercase"
                color="#142233"
                display="flex"
                alignItems="flex-start"
                justifyContent="flex-start"
                flexDirection="column"
                bg="#D6DDEB"
              >
                <Link
                  px="16px"
                  py="6px"
                  borderBottom="1px solid #fff"
                  _hover={{
                    textDecoration: 'none',
                    color: '#FFFFFF',
                    bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                  }}
                  w="100%"
                >
                  GO TO MarketPlace
                </Link>
                <Link
                  px="16px"
                  py="6px"
                  _hover={{
                    textDecoration: 'none',
                    color: '#FFFFFF',
                    bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                  }}
                  w="100%"
                >
                  Switch to Enoch Website
                </Link>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
};

export default AfterLoginMenu;
