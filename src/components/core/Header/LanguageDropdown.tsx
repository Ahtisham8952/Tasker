import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';

const LanguageDropdown = () => {
  return (
    <Menu>
      <MenuButton>
        <Flex gap="6px">
          <Text
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="500"
            lineHeight="34px"
          >
            Language
          </Text>
          <Image alt="img" src="/flagships.svg"></Image>
          <Image alt="img" src="/tipdown.svg"></Image>
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>English</MenuItem>
        <MenuItem>French</MenuItem>
        <MenuItem>Italian</MenuItem>

        <MenuItem>German</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageDropdown;
