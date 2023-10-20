import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Link,
  Image,
  Box,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg="transparent"
        color="#FFF"
        as={Button}
        p="0"
        ml="8px"
        _hover={{ bg: 'transparent' }}
        _focus={{ bg: 'transparent' }}
      >
        <HamburgerIcon color="white" fontSize="22px" fontWeight="600" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay
          bg="rgba(255, 255, 255, 0.1)"
          backdropFilter="blur(2px)"
        />
        <DrawerContent bg="#5BBB7B" minW={{ base: '100%', sm: '50%' }}>
          <DrawerCloseButton color="#44566C" fontSize="20px" />
          <DrawerHeader pt={'30px'} pb={'20px'}>
            <Link
              href="#"
              height={'80px'}
              width={'140px'}
              mx={'auto'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Image src="/header/TechLogo.png" alt="logo" />
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <Flex
              flexDirection="column"
              gap="25px"
              alignItems="center"
              justifyContent="center"
            >
              <Flex flexDirection={'column'} gap="10px" alignItems={'center'}>
                <Box
                  pb="4px"
                  minWidth={'3px'}
                  borderBottom={'2px solid rgba(52, 97, 255, 1)'}
                >
                  <Link
                    href="#"
                    color="white"
                    _hover={{ textDecoration: 'none' }}
                    fontSize="16px"
                    fontWeight="600"
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
                  <Link href="#" _hover={{ textDecoration: 'none' }}>
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
                    Login
                  </Link>
                </Box>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
