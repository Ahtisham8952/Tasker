import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  Image,
  Input,
  InputGroup,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import { useMutation, gql } from '@apollo/client';

const CREATE_UPDATE_CONTACT_MUTATION = gql`
  mutation CreateUpdateContact($name: String!, $email: String!) {
    createUpdateContact(
      createUpdateContactInput: { name: $name, email: $email }
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

export const Cardcontact = () => {
  const [contacts, setContacts] = useState([
    { name: '', email: '' },
    { name: '', email: '' },
  ]);

  const [createUpdateContact] = useMutation(CREATE_UPDATE_CONTACT_MUTATION);

  const addContact = () => {
    if (contacts.length < 4) {
      setContacts((prevContacts) => [
        ...prevContacts,
        { name: '', email: '' },
        { name: '', email: '' },
      ]);
    }
  };

  const handleNameChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].name = event.target.value;
    setContacts(updatedContacts);
  };

  const handleEmailChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].email = event.target.value;
    setContacts(updatedContacts);
  };

  const saveContacts = async () => {
    try {
      const contactResponses: any = [];

      for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];

        const { data } = await createUpdateContact({
          variables: {
            name: contact.name,
            email: contact.email,
          },
        });

        contactResponses.push(data.createUpdateContact);
      }

      console.log(contactResponses);
      // Perform any necessary actions with the contactResponses array
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  return (
    <Box>
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        gap={{ base: '3', md: '3', lg: '5' }}
        justifyContent="center"
        flexWrap={'wrap'}
        pt="10"
      >
        {contacts.map((contact, index) => (
          <Box
            key={index}
            bgColor="#E0E0E0"
            p={{ base: '15px', md: '20px', lg: '30px', xl: '40px' }}
            width={{ base: '100%', md: '100%', lg: '40%' }}
            borderRadius="20px"
            height="70%"
          >
            <FormControl>
              <InputGroup
                bgColor="white"
                p={{ base: '10px', lg: '23px' }}
                borderRadius="35"
              >
                <Image alt="img" src="user.svg" />
                <Input
                  _focusVisible={{ border: 'none' }}
                  type="Text"
                  placeholder="Name"
                  border="none"
                  value={contact.name}
                  onChange={(event) => handleNameChange(index, event)}
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
                  type="Text"
                  placeholder="Email"
                  border="none"
                  value={contact.email}
                  onChange={(event) => handleEmailChange(index, event)}
                />
              </InputGroup>
            </FormControl>
            <Box>
              <Text
                fontWeight="700"
                fontSize="20px"
                fontStyle="bold"
                textColor="#67717D"
                pt="40px"
                mb="20px"
              >
                Options
              </Text>

              <Flex>
                <Box>
                  <Stack>
                    <Checkbox size="md" borderColor={'black'}>
                      Primary contact
                    </Checkbox>
                    <Checkbox size="md" borderColor={'black'}>
                      Primary contact
                    </Checkbox>
                    <Checkbox size="md" borderColor={'black'}>
                      Parent or guardian{' '}
                    </Checkbox>
                    <Checkbox size="md" borderColor={'black'}>
                      Parent or guardian{' '}
                    </Checkbox>
                    <Checkbox size="md" borderColor={'black'}>
                      Email notifications{' '}
                    </Checkbox>
                    <Checkbox size="md" borderColor={'black'}>
                      Instant notifications{' '}
                    </Checkbox>
                    <Checkbox size="md" borderColor={'black'}>
                      Emergency contact{' '}
                    </Checkbox>
                  </Stack>
                </Box>
              </Flex>
            </Box>
          </Box>
        ))}
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
        onClick={addContact}
      >
        <Image src="plus.svg" alt="plus.svg" />
      </Box>

      <Box textAlign="center" pt="10" mb="40px">
        <Button
          onClick={saveContacts}
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
          Save Contacts
        </Button>
      </Box>
    </Box>
  );
};
