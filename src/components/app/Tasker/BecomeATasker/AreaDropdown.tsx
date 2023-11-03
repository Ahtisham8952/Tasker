import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
const AreaDropdown = () => {
  return (
    <>
      <Box py={{ base: '15px', md: '30px' }}>
        <Text
          mb="10px"
          fontWeight="600"
          fontSize={{
            base: '16px',
            md: '18px',
            lg: '22px',
            xl: '24px',
            xxl: '24px',
            xxxl: '24px',
          }}
          lineHeight="150% "
          color="#000000"
        >
          Select your area
        </Text>
        <Menu>
          <MenuButton
            background={'transparent'}
            textAlign={'left'}
            h={{ base: '50px', md: '100px' }}
            w="100%"
            border="1px solid #CFCFCF"
            borderRadius={'5px'}
            fontWeight="600"
            fontSize={{
              base: '16px',
              md: '18px',
              lg: '22px',
              xl: '24px',
              xxl: '24px',
              xxxl: '24px',
            }}
            lineHeight="150% "
            color="#000000"
            as={Button}
            rightIcon={<ChevronDownIcon />}
            justifyContent={'flex-start'}
          >
            Albany
          </MenuButton>
          <MenuList>
            <MenuItem>-</MenuItem>
            <MenuItem>-</MenuItem>
            <MenuItem>-</MenuItem>
            <MenuItem>-</MenuItem>
            <MenuItem>-</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default AreaDropdown;
