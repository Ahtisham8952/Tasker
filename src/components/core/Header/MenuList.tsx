import { ChevronDownIcon } from '@chakra-ui/icons';
import { Image, Button, Flex, Text, SystemStyleObject } from '@chakra-ui/react';
import React from 'react';

const MenuItemList = () => {
  return (
    <>
      <Flex
        gap={'8px'}
        mr={{ lg: '40px', base: '0px' }}
        flexDirection={{ lg: 'row', base: 'column' }}
      >
        <Button
          bg="rgba(207, 207, 207, 0.1)"
          _hover={'rgba(207, 207, 207,1)' as SystemStyleObject}
          _active={'rgba(207, 207, 207,1)' as SystemStyleObject}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          py={'8px'}
          px={'12px'}
        >
          <Image
            src="https://cdn.enochdev.com/starget-bucket/header-menu/home.svg"
            alt="home"
          />
        </Button>
        <Button
          bg="rgba(207, 207, 207, 0.1)"
          _hover={'rgba(207, 207, 207,1)' as SystemStyleObject}
          fontWeight={'500'}
          fontSize={'14px'}
          lineHeight={'170.23%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'6px'}
          py={'8px'}
          px={'12px'}
          color={'#112135'}
        >
          <Image
            src="https://cdn.enochdev.com/starget-bucket/header-menu/polygon.svg"
            alt="eth"
          />
          <Text>Polygon mainnet</Text>
          <ChevronDownIcon fontSize={'18px'} />
        </Button>

        <Button
          bg="rgba(207, 207, 207, 0.1)"
          _hover={{ opacity: '0.8' }}
          fontWeight={'500'}
          fontSize={'14px'}
          lineHeight={'170.23%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          py={'8px'}
          px={'12px'}
          color={'#112135'}
        >
          <Text>Connect Wallet</Text>
        </Button>
        <Button
          bg="rgba(207, 207, 207, 0.1)"
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          py={'8px'}
          px={'12px'}
          _hover={{ opacity: '0.8' }}
        >
          <Image
            src="https://cdn.enochdev.com/starget-bucket/header-menu/cart.svg"
            alt="cart"
          />
        </Button>
      </Flex>
    </>
  );
};

export default MenuItemList;
