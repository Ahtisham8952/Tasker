import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
const WorkMenu = () => {
  return (
    <>
      <Menu>
        <MenuButton
          w="250px"
          bg="transparent"
          border=" 1px solid #BDBABA"
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>-</MenuItem>
          <MenuItem>-</MenuItem>
          <MenuItem>-</MenuItem>
          <MenuItem>-</MenuItem>
          <MenuItem>-</MenuItem>
          <MenuItem>-</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default WorkMenu;
