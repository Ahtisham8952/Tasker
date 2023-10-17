import { TriangleDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Link,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
} from '@chakra-ui/react';
import React from 'react';
const UserMenu = () => {
  return (
    <>
      <Box>
        <Menu>
          <MenuButton
            bg="transparent"
            color="#FFF"
            as={Button}
            p="0"
            rightIcon={<TriangleDownIcon color={'#3F434A'} fontSize={'10px'} />}
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
                  src="https://cdn.enochdev.com/starget-bucket/header-menu/image_1.svg"
                  alt="img"
                  h="100%"
                  w="100%"
                />
                <Badge
                  position="absolute"
                  bg="#ECECEC"
                  border="1px solid #FFFFFF"
                  borderRadius="50%"
                  top="-2px"
                  right="-2px"
                  h="12px"
                  w="12px"
                ></Badge>
              </Box>
            </Box>
          </MenuButton>
          <MenuList
            bg="#transparent"
            border={'none'}
            outline={'none'}
            minW={'248px'}
          >
            <MenuItem
              bg={'#FFFFFF'}
              color={'#515151'}
              px={'16px'}
              py={'6px'}
              fontWeight={'600'}
              textTransform={'uppercase'}
              height={'36px'}
              _hover={{
                bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                fontWeight: '700',
              }}
              _focus={{
                bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                color: '#FFFFFF',
                fontWeight: '700',
              }}
              _active={{
                bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                color: '#FFFFFF',
                fontWeight: '700',
              }}
            >
              <Link
                href="#"
                _hover={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                Sign in to Marketplace
              </Link>
            </MenuItem>
            <MenuItem
              bg={'#FFFFFF'}
              color={'#515151'}
              px={'16px'}
              py={'6px'}
              fontWeight={'600'}
              textTransform={'uppercase'}
              height={'36px'}
              _hover={{
                bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                fontWeight: '700',
              }}
              _focus={{
                bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                color: '#FFFFFF',
                fontWeight: '700',
              }}
              _active={{
                bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                color: '#FFFFFF',
                fontWeight: '700',
              }}
            >
              <Link
                href="#"
                _hover={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                GO TO STARGATE
              </Link>
            </MenuItem>
            <MenuItem
              bg={'#FFFFFF'}
              color={'#515151'}
              px={'16px'}
              py={'6px'}
              fontWeight={'600'}
              textTransform={'uppercase'}
              height={'36px'}
              _hover={{
                bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                fontWeight: '700',
              }}
              _focus={{
                bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                color: '#FFFFFF',
                fontWeight: '700',
              }}
              _active={{
                bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                color: '#FFFFFF',
                fontWeight: '700',
              }}
            >
              <Link
                href="#"
                _hover={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                Switch to Enoch Website
              </Link>
            </MenuItem>
            <MenuItem
              bg={'#FFFFFF'}
              color={'#515151'}
              px={'16px'}
              py={'6px'}
              fontWeight={'600'}
              textTransform={'uppercase'}
              height={'36px'}
              _hover={{
                bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                fontWeight: '700',
              }}
              _focus={{
                bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                color: '#FFFFFF',
                fontWeight: '700',
              }}
              _active={{
                bgGradient: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                color: '#FFFFFF',
                fontWeight: '700',
              }}
            >
              <Link
                href="#"
                _hover={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                Invite a friend
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default UserMenu;
