import { Box, Button, Input, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import CustomWrapper from '../CustomWrapper';

const LoginMain = () => {
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
          <Box mb="40px">
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
              Email Address
            </Text>
            <Input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email Address"
              border="1px solid #BDBABA"
              borderRadius={'5px'}
              color="#000000"
              _focusVisible={{ border: '1px solid #BDBABA' }}
              h="55px"
            />
          </Box>
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
              Password
            </Text>
            <Input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              border="1px solid #BDBABA"
              borderRadius={'5px'}
              color="#000000"
              _focusVisible={{ border: '1px solid #BDBABA' }}
              h="55px"
            />
          </Box>
          <Box>
            <Link
              mb="8px"
              fontWeight="700"
              fontSize={{
                base: '14px',
                md: '16px',
                lg: '20px',
              }}
              lineHeight="150% "
              color="#1F4A40"
            >
              Forgot Password?
            </Link>
          </Box>

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
            Login
          </Button>
        </form>
        <Text
          mt="25px"
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
          Did you purchase an assembly from IKEA or sign up via Facebook or
          Google? Create Password
        </Text>
      </CustomWrapper>
    </>
  );
};

export default LoginMain;
