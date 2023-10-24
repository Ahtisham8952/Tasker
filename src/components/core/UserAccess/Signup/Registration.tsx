import { Button } from '@chakra-ui/react';
import React from 'react';
import CustomWrapper from '../CustomWrapper';
import CustomLabelInput from '../CustomLabelInput';

const Registration = () => {
  return (
    <>
      <CustomWrapper>
        <form>
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
          <CustomLabelInput
            Label="Password"
            InputType="password"
            Inputplaceholder="Password"
          />
          <CustomLabelInput
            Label="Zip Code "
            InputType="text"
            Inputplaceholder="Zip Code "
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
          >
            Create Account
          </Button>
        </form>
      </CustomWrapper>
    </>
  );
};

export default Registration;
