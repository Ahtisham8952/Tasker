import { Box, Button, Input, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import CustomWrapper from '../CustomWrapper';
import CustomLabelInput from '../CustomLabelInput';

const Registration = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); // Add e as the parameter to access the event object
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <CustomWrapper>
        <form onSubmit={handleSubmit}>
          <CustomLabelInput
            Label="First Name"
            InputType="text"
            Inputplaceholder="First Name"
          />
          <CustomLabelInput
            Label="Last Name"
            InputType="text"
            Inputplaceholder="Last Name"
          />
          <CustomLabelInput
            Label="Email"
            InputType="text"
            Inputplaceholder="Email"
          />

          <Button
            mt="20px"
            w="100%"
            colorScheme="#1F4A40"
            bg="#1F4A40"
            p="14px 22px"
            color="white"
            fontSize="16px"
            fontWeight="400"
            lineHeight={'24px'}
            borderRadius={'40px'}
            type="submit"
            onClick={handleSubmit}
          >
            Create Account
          </Button>
        </form>
      </CustomWrapper>
    </>
  );
};

export default Registration;
