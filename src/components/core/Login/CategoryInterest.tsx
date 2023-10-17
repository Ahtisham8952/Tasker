import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';

const CategoryInterest = () => {
  return (
    <Box>
      <Flex
        alignItems={{ base: 'flex-start', lg: 'center' }}
        gap="30px"
        pt="90px"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Flex>
          <Text
            cursor={'pointer'}
            fontSize={{ base: '20px', md: '24px' }}
            fontWeight="700"
            lineHeight="34px"
          >
            Select Interested categories
          </Text>
        </Flex>
        <Flex gap="40px" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
          <Text
            cursor={'pointer'}
            fontSize="18px"
            fontWeight="700"
            color="#B3B8BE"
            lineHeight="26px"
          >
            Dance
          </Text>
          <Text
            cursor={'pointer'}
            fontSize="18px"
            fontWeight="700"
            color="#B3B8BE"
            lineHeight="26px"
          >
            Music
          </Text>
          <Text
            cursor={'pointer'}
            fontSize="18px"
            fontWeight="700"
            color="#B3B8BE"
            lineHeight="26px"
          >
            Language
          </Text>
          <Text
            cursor={'pointer'}
            fontSize="18px"
            fontWeight="700"
            color="#B3B8BE"
            lineHeight="26px"
          >
            Chess
          </Text>
          <Text
            cursor={'pointer'}
            fontSize="18px"
            fontWeight="700"
            color="#B3B8BE"
            lineHeight="26px"
          >
            Reading
          </Text>
          <Text
            cursor={'pointer'}
            fontSize="18px"
            fontWeight="700"
            color="#B3B8BE"
            lineHeight="26px"
          >
            Advanture
          </Text>
        </Flex>
      </Flex>
      <Box
        pt="35px"
        textAlign={{
          base: 'center',
          md: 'center',
          lg: 'start',
          xl: 'start',
          '2xl': 'start',
        }}
      >
        <Button
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
          Save interests
        </Button>
      </Box>
      <Divider
        mt="40px"
        orientation="horizontal"
        borderWidth="1px"
        color="#DAD9D9"
      />
    </Box>
  );
};

export default CategoryInterest;
