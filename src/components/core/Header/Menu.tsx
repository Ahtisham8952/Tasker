import React from 'react';
import {
  Box,
  Button,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';

const MenuComponent = () => {
  return (
    <>
      <Box
        position="relative"
        width="24px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Popover placement="top-start">
          <PopoverTrigger>
            <Button
              p={'0px'}
              m={'0px'}
              bg={'transparent'}
              _hover={{ bg: 'transparent', opacity: '0.8' }}
              _focus={{ bg: 'transparent' }}
            >
              <Image
                src="https://cdn.enochdev.com/starget-bucket/header-menu/menu-icon.svg"
                alt=""
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent borderRadius={'0px'} top={'15px'}>
            <PopoverBody p={'0px'} borderRadius={'0px'}></PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
};

export default MenuComponent;
