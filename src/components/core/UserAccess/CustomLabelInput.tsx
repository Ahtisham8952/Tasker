import { Box, Input, Text } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

const CustomLabelInput = ({
  Label,
  InputType,
  InputValue,
  InputonChange,
  Inputplaceholder,
}) => {
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
          lineHeight="150%"
          color="#000000"
        >
          {Label}
        </Text>
        <Input
          type={InputType}
          value={InputValue}
          onChange={InputonChange}
          placeholder={Inputplaceholder}
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

CustomLabelInput.propTypes = {
  Label: PropTypes.string.isRequired,
  InputType: PropTypes.string.isRequired,
  InputValue: PropTypes.string.isRequired,
  InputonChange: PropTypes.func.isRequired,
  Inputplaceholder: PropTypes.string,
};

export default CustomLabelInput;
