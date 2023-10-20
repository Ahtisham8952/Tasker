import React, { useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

const options: string[] = ['Option 1', 'Option 2', 'Option 3'];

function CategoryDropdown() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<span>&#x25BE;</span>}
        fontSize={'16px'}
        fontWeight={'400'}
        color="#020202"
      >
        {selectedOption || 'Choose Category'}
      </MenuButton>
      <MenuList>
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleOptionSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default CategoryDropdown;
