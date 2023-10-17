import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  InputGroup,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

import { gql, useMutation } from '@apollo/client';
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper';
import { Cardcontact } from './Cardcontact';
import CategoryInterest from './CategoryInterest';

const CREATE_UPDATE_CHILD_MUTATION = gql`
  mutation CreateUpdateChild(
    $name: String!
    $dateOfBirth: DateTime!
    $gender: Gender!
  ) {
    createUpdateChild(
      createUpdateChildInput: {
        name: $name
        dateOfBirth: $dateOfBirth
        gender: $gender
      }
    ) {
      id
      createdAt
      updatedAt
      name
      dateOfBirth
      gender
      userId
      profileImageURL
      profileImageKey
    }
  }
`;

const LoginStepTwo = () => {
  const [children, setChildren] = useState([
    { name: '', dateOfBirth: '', gender: '' },
    { name: '', dateOfBirth: '', gender: '' },
  ]);
  const [createUpdateChild] = useMutation(CREATE_UPDATE_CHILD_MUTATION);

  const addChild = () => {
    if (children.length < 6) {
      setChildren([
        ...children,
        { name: '', dateOfBirth: '', gender: '' },
        { name: '', dateOfBirth: '', gender: '' },
      ]);
    }
  };

  const handleNameChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedChildren = [...children];
    updatedChildren[index].name = event.target.value;
    setChildren(updatedChildren);
  };

  const handleBirthdateChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedChildren = [...children];
    updatedChildren[index].dateOfBirth = event.target.value;
    setChildren(updatedChildren);
  };

  const handleGenderChange = (index: number, value: string) => {
    const updatedChildren = [...children];
    updatedChildren[index].gender = value;
    setChildren(updatedChildren);
  };

  const saveChildren = async () => {
    for (const child of children) {
      const { id, createdAt, updatedAt } = (await createUpdateChild({
        variables: {
          name: child.name,
          dateOfBirth: child.dateOfBirth,
          gender: child.gender,
        },
      })) as any; //TODO: remove this any

      // Perform any necessary actions with the response data
      console.log(id, createdAt, updatedAt);
    }
  };

  return (
    <LayoutWrapper>
      <Box p="30px">
        <Box>
          <Heading
            as="h2"
            fontSize={{ base: '24px', md: '40px', lg: '40px' }}
            fontWeight="700"
            lineHeight="58px"
            pt="5px"
            pb="15px"
            textAlign="center"
          >
            Thanks For Joining Flok
          </Heading>
          <Text
            fontWeight="300"
            fontSize="16px"
            lineHeight="25px "
            pt="5px"
            pr="30px"
            textAlign="center"
          >
            Would you like to customize your experience?
          </Text>
        </Box>
        <CategoryInterest />

        <Heading
          as="h2"
          fontSize={{ base: '20px', md: '20px', lg: '24px' }}
          fontWeight="700"
          lineHeight="58px"
          pt="5px"
          pb="15px"
          textAlign="center"
          textColor="#67717D"
        >
          Add children?
        </Heading>

        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
          gap={{ base: '3', md: '3', lg: '5' }}
          justifyContent="center"
          flexWrap={'wrap'}
          pt="10"
        >
          {children.map((child, index) => (
            <Box
              key={index}
              bgColor="#E0E0E0"
              px={{ base: '15px', md: '20px', lg: '30px', xl: '40px' }}
              py={{ base: '30px', md: '30px', lg: '30px', xl: '40px' }}
              width={{ base: '100%', md: '100%', lg: '40%' }}
              borderRadius="20px"
            >
              <FormControl>
                <InputGroup
                  bgColor="white"
                  p={{ base: '10px', lg: '23px' }}
                  borderRadius="35"
                >
                  <Image alt="img" src="user.svg" />
                  <Input
                    placeholder="Child's name"
                    value={child.name || ''}
                    onChange={(event) => handleNameChange(index, event)}
                    _focusVisible={{ border: 'none' }}
                    type="text"
                    border="none"
                  />
                </InputGroup>
                <InputGroup
                  mt="20px"
                  bgColor="white"
                  p={{ base: '10px', lg: '23px' }}
                  borderRadius="35"
                >
                  <Image alt="img" src="calendar.svg" />
                  <Input
                    _focusVisible={{ border: 'none' }}
                    type="date"
                    placeholder="Child's birthdate"
                    value={child.dateOfBirth}
                    onChange={(event) => handleBirthdateChange(index, event)}
                  />
                </InputGroup>
              </FormControl>
              <Box>
                <Text
                  fontWeight="700"
                  fontSize="20px"
                  fontStyle="bold"
                  textColor="#67717D"
                  pt="10px"
                  mb="20px"
                >
                  Gender?
                </Text>

                <Flex
                  justifyContent={'space-between'}
                  flexDirection={{ base: 'column', md: 'row' }}
                  gap="20px"
                >
                  <Box>
                    <RadioGroup
                      onChange={(value) => handleGenderChange(index, value)}
                      flexDirection={'column'}
                    >
                      <Stack spacing={'20px'}>
                        <Radio value="MALE">Male</Radio>
                        <Radio value="FEMALE">Female</Radio>
                        <Radio value="OTHER">Other</Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>

                  <Box>
                    <Image
                      h={{ base: '30px', md: '40px', lg: '60px' }}
                      w={{ base: '30px', md: '40px', lg: '60px' }}
                      mx="auto"
                      src="uploadpic.svg"
                      alt="uploadpic"
                    />
                    <Text
                      textAlign={'center'}
                      color="#67717D"
                      fontSize="14px"
                      fontWeight="300px"
                    >
                      Add a Photo
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          ))}
        </Box>

        {children.length < 6 && (
          <Box
            onClick={addChild}
            cursor={'pointer'}
            bg="#1F1F1F"
            display="flex"
            justifyContent="center"
            borderRadius="40px"
            p={{ base: '2', md: '2', lg: '5' }}
            width={{ base: '10%', md: '4%', lg: '5%' }}
            alignContent="center"
            mx="auto"
            mt="-21"
            position="relative"
            zIndex="5"
          >
            <Image src="plus.svg" alt="plus.svg" />
          </Box>
        )}

        <Box textAlign="center" pt="10">
          <Button
            onClick={saveChildren}
            type="submit"
            bg="#1F1F1F"
            colorScheme={'#1F1F1F'}
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="400"
            lineHeight={'150%'}
            p="8px 40px"
            borderRadius={'50px'}
            border="1px solid white"
          >
            Save Children
          </Button>
        </Box>
      </Box>

      <Heading
        as="h2"
        fontSize={{ base: '20px', md: '20px', lg: '24px' }}
        fontWeight="700"
        lineHeight="58px"
        pt="5px"
        pb="15px"
        textAlign="center"
        textColor="#67717D"
      >
        Contacts
      </Heading>
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        gap={{ base: '3', md: '3', lg: '5' }}
        justifyContent="center"
        pt="10"
      >
        <Cardcontact />
        <Cardcontact />
      </Box>
      <Box
        bg="#1F1F1F"
        display="flex"
        justifyContent="center"
        borderRadius="40"
        p={{ base: '2', md: '2', lg: '5' }}
        width={{ base: '10%', md: '4%', lg: '5%' }}
        alignContent="center"
        mx="auto"
        mt="-21"
        position="relative"
        zIndex="5"
      >
        <Image src="plus.svg" alt="plus.svg" />
      </Box>
      <Box textAlign="center" pt="10">
        <Button
          as={Link}
          href="/userprofile"
          type="submit"
          bg="#1F1F1F"
          colorScheme={'#1F1F1F'}
          color="#FFFFFF"
          fontSize="14px"
          fontWeight="400"
          lineHeight={'150%'}
          p="8px 40px"
          borderRadius={'50px'}
          border="1px solid white"
        >
          Save Children
        </Button>
      </Box>
    </LayoutWrapper>
  );
};
export default LoginStepTwo;
