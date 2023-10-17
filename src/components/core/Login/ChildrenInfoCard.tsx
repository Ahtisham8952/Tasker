import {
  Box,
  Flex,
  FormControl,
  Image,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';

export const ChildrenInfoCard = () => {
  return (
    <Box
      bgColor="#E0E0E0"
      px={{ base: '15px', md: '20px', lg: '30px', xl: '40px' }}
      py={{ base: '30px', md: '30px', lg: '30px', xl: '40px' }}
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
            placeholder="Child's name"
            // value={child.name || ''}
            // onChange={(event) => handleNameChange(index, event)}
            _focusVisible={{ border: 'none' }}
            type="Text"
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
            type="date"
            placeholder="Child's birthdate"
            // value={child.birthdate || ''}
            // onChange={(event) => handleBirthdateChange(index, event)}
            _focusVisible={{ border: 'none' }}
            border="none"
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
            <Stack>
              <RadioGroup
              // onChange={(value) => handleGenderChange(index, value)}
              >
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
              </RadioGroup>
            </Stack>
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
  );
};
