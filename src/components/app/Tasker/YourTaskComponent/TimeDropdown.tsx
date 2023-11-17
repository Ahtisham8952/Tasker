import React, { useState } from 'react';
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function generateTimeOptions() {
  const timeOptions = [];
  const currentTime = new Date();
  currentTime.setHours(8, 0, 0, 0); // Set the initial time to 8:00 AM

  while (
    currentTime.getHours() < 21 ||
    (currentTime.getHours() === 21 && currentTime.getMinutes() === 0)
  ) {
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    timeOptions.push(formattedTime);
    currentTime.setMinutes(currentTime.getMinutes() + 30);
  }

  return timeOptions;
}

function TimeDropdown() {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const timeOptions = generateTimeOptions();

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="outline"
        w="100%"
        border="1px solid #1F4A40"
        p="10px"
      >
        <Flex justifyContent={'space-between'}>
          {selectedTime || 'I am Flexible'}
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {timeOptions.map((time) => (
          <MenuItem key={time} onClick={() => handleTimeSelection(time)}>
            {time}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
export default TimeDropdown;
