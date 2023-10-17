import { gql, useMutation } from '@apollo/client';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper';

const REGISTER_MUTATION = gql`
  mutation RegisterUser(
    $email: String!
    $name: String!
    $password: String!
    $confirmPassword: String!
    $userType: UserType!
  ) {
    registerUser(
      registerUserInput: {
        email: $email
        name: $name
        password: $password
        confirmPassword: $confirmPassword
        userType: $userType
      }
    ) {
      email
      name
    }
  }
`;

const FormComponent = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER_MUTATION);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<any>({}); //TODO:remove this any
  const router = useRouter();

  const validateForm = () => {
    const errors: any = {}; //TODO:remove this any

    if (!email) {
      errors.email = 'Email is required';
    }
    if (name.length <= 2) {
      errors.name = 'Name length should be greater than 2';
    }
    if (!name) {
      errors.name = 'Name is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }
    if (password.length < 8) {
      errors.password = 'Password must be greater than 8 characters';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!userType) {
      errors.userType = 'User Type is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const isValid = validateForm();
      if (!isValid) {
        throw Error('Invalid Form');
      }
      await register({
        variables: {
          email,
          name,
          password,
          confirmPassword,
          userType:
            userType === 'PARENT'
              ? 'PARENT'
              : userType === 'ADMIN'
              ? 'ADMIN'
              : 'PROVIDER',
        },
      });
      setSubmitting(false);
      router.push('/login');
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <LayoutWrapper>
        <Box maxW={'1560px'} w="100%" px="20px" mx="auto">
          <Box py="32px">
            <Text
              fontSize="48px"
              fontWeight="700"
              lineHeight="58px"
              textAlign="center"
              pt="5px"
            >
              Join the Flok
            </Text>
            <Text
              textAlign="center"
              fontWeight="300"
              color="#626262"
              fontSize={'16px'}
              pt="20px"
              maxW={'556px'}
              mx="auto"
            >
              Complete the registration to enhance your Flok experience and
              unliock enhanced features.
            </Text>
            <Box display="flex" justifyContent="center">
              <UnorderedList fontWeight="300" color="#626262" fontSize={'16px'}>
                <ListItem>
                  Notifications for events that you are interested in
                </ListItem>
                <ListItem>Be the first to know about new events.</ListItem>
                <ListItem>Host events of your own</ListItem>
                <ListItem>
                  Quickly register for events and make sure your kids are <br />{' '}
                  able to participate in the hottest, funnest events.
                </ListItem>
              </UnorderedList>
            </Box>

            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch" maxW={'852px'} w="100%">
                <FormControl isInvalid={errors.name}>
                  <FormLabel fontWeight={'700'} htmlFor="name">
                    Name
                  </FormLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fontSize="14px"
                    h={{ base: '45px', xl: '60px', xxl: '60px', xxxl: '90px' }}
                    bg="white"
                    borderRadius="5px"
                    fontWeight="400"
                    lineHeight={'150%'}
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.email}>
                  <FormLabel fontWeight={'700'} htmlFor="email">
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fontSize="14px"
                    h={{ base: '45px', xl: '60px', xxl: '60px', xxxl: '90px' }}
                    bg="white"
                    borderRadius="5px"
                    fontWeight="400"
                    lineHeight={'150%'}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.password}>
                  <FormLabel fontWeight={'700'} htmlFor="password">
                    Password
                  </FormLabel>
                  <Input
                    fontSize="14px"
                    h={{ base: '45px', xl: '60px', xxl: '60px', xxxl: '90px' }}
                    bg="white"
                    borderRadius="5px"
                    fontWeight="400"
                    lineHeight={'150%'}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.confirmPassword}>
                  <FormLabel fontWeight={'700'} htmlFor="confirmPassword">
                    Confirm Password
                  </FormLabel>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    fontSize="14px"
                    h={{ base: '45px', xl: '60px', xxl: '60px', xxxl: '90px' }}
                    bg="white"
                    borderRadius="5px"
                    fontWeight="400"
                    lineHeight={'150%'}
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                </FormControl>
                <Box width="40%" pt="5px">
                  <Text
                    fontSize={{ base: '20px', md: '24px' }}
                    fontWeight="700"
                    lineHeight="58px"
                    pt="5px"
                    pb="15px"
                    textColor="#1F1F1F"
                  >
                    Account type{' '}
                  </Text>
                  <FormControl isInvalid={errors.userType}>
                    <RadioGroup
                      id="userType"
                      name="userType"
                      value={userType}
                      onChange={(value) => setUserType(value)}
                    >
                      <VStack spacing={2} alignItems={'left'}>
                        <Radio value="PARENT">Parent</Radio>

                        <Radio value="PROVIDER" w="max-content">
                          Event provider/Organaization
                        </Radio>
                      </VStack>
                    </RadioGroup>
                    <FormErrorMessage>{errors.userType}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Box width="40%" pt="5px">
                  <Text
                    fontSize={{ base: '20px', md: '24px' }}
                    fontWeight="700"
                    lineHeight="58px"
                    pt="5px"
                    pb="15px"
                    textColor="#1F1F1F"
                  >
                    Notification:
                  </Text>
                  <Stack>
                    <Checkbox>Email</Checkbox>
                    <Checkbox defaultChecked w="max-content">
                      Instant notifications
                    </Checkbox>
                  </Stack>
                </Box>
                <Box width="100%" pt="5px">
                  <Text
                    fontSize={{ base: '20px', md: '24px' }}
                    fontWeight="700"
                    lineHeight="58px"
                    pt="5px"
                    pb="15px"
                    textColor="#1F1F1F"
                  >
                    Terms and Conditions:
                  </Text>

                  <FormControl>
                    <Checkbox defaultChecked>
                      I agree to the Privacy &{' '}
                      <Link href="/terms" textDecoration={'underline'}>
                        {' '}
                        Terms and Conditions
                      </Link>
                    </Checkbox>
                  </FormControl>
                </Box>

                <Button
                  alignItems={'center'}
                  mt="30px"
                  bg="#1F1F1F"
                  colorScheme={'#1F1F1F'}
                  color="#FFFFFF"
                  fontSize="14px"
                  maxW={'200px'}
                  fontWeight="400"
                  lineHeight={'150%'}
                  p="8px 40px"
                  borderRadius={'50px'}
                  border="1px solid white"
                  type="submit"
                  isLoading={submitting}
                  loadingText="Submitting"
                >
                  Signup
                </Button>
              </VStack>
            </form>
            <Text
              mt="20px"
              color="#1F1F1F"
              fontSize="16px"
              fontWeight="300"
              lineHeight={'150%'}
            >
              Already Have a Account?
              <Link
                color="#1F1F1F"
                href="/login"
                textDecoration={'underline'}
                mx="10px"
                fontSize="20px"
                fontWeight="600"
                lineHeight={'150%'}
              >
                Login
              </Link>
            </Text>
          </Box>
        </Box>
      </LayoutWrapper>
    </>
  );
};

export default FormComponent;
