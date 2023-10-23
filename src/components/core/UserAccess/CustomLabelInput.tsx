import { Box, Input, Text } from '@chakra-ui/react';
import React from 'react';

const CustomLabelInput = (props) => {
  return (
    <>
      <Box mb="20px">
        <Text
          mb="8px"
          fontWeight="500"
          fontSize={{
            base: '14px',
            md: '16px',
            lg: '20px',
          }}
          lineHeight="150% "
          color="#000000"
        >
          {props.Label}
        </Text>
        <Input
          type={props.InputType}
          value={props.InputValue}
          onChange={props.Inputonchange}
          placeholder={props.Inputplaceholder}
          border="1px solid #BDBABA"
          borderRadius={'5px'}
          color="#000000"
          _focusVisible={{ border: '1px solid #BDBABA' }}
          h="55px"
        />
      </Box>
    </>
  );
};

export default CustomLabelInput;
