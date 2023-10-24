import React from 'react';
import CustomWrapper from '../CustomWrapper';
import CustomLabelInput from '../CustomLabelInput';
import { Button, Text } from '@chakra-ui/react';

export const PasswordChange = () => {
  return (
    <>
      <CustomWrapper>
        <Text
          mt="10px"
          textAlign={'center'}
          fontWeight="600"
          fontSize={{
            base: '20px',
            md: '26px',
            lg: '32px',
          }}
          lineHeight="150% "
          color="#1F1F1F"
        >
          Set Password
        </Text>
        <Text
          mt="15px"
          textAlign={'center'}
          fontWeight="500"
          fontSize={{
            base: '14px',
            md: '16px',
            lg: '20px',
          }}
          lineHeight="150% "
          color="#1F1F1F"
        >
          Enter your email and we will send you instructions to set your
          password
        </Text>
        <form>
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
          >
            Set Password
          </Button>
        </form>
      </CustomWrapper>
    </>
  );
};
