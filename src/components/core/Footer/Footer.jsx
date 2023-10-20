import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
const Discover = [
  {
    Text: 'Become a Tasker ',
  },
  {
    Text: 'Service by City ',
  },
  {
    Text: 'All Services ',
  },
  {
    Text: 'Help ',
  },
];
const Company = [
  {
    Text: 'About Us',
  },
  {
    Text: 'Tasker for Good ',
  },
  {
    Text: 'Blogs ',
  },
  {
    Text: 'Terms & Privacy ',
  },
];
const Categories = [
  {
    Text: 'Furniture Assembly ',
  },
  {
    Text: 'Mount a TV, art or shelves ',
  },
  {
    Text: 'Help Moving ',
  },
  {
    Text: 'Home Cleaning ',
  },
  {
    Text: 'Minor Plumbing Repairs ',
  },
  {
    Text: 'Electrical Help',
  },
  {
    Text: 'Heavy Lifting ',
  },
  {
    Text: 'Yardwork & Gardening ',
  },
];
const Footers = () => {
  return (
    <Box bg="#1F4A40">
      <Box maxW={'1740px'} mx="auto" px="20px" py="20px">
        <Box
          mb="40px"
          borderBottom={'1px solid rgba(255, 255, 255, 0.60)'}
          pb="20px"
        >
          <Flex gap="24px" justifyContent={'flex-end'} alignItems={'center'}>
            <Text
              fontWeight="600"
              fontSize="24px"
              lineHeight="150% "
              color="#FFFFFF"
            >
              Follow us :
            </Text>
            <Image alt="img" src="/header/facebookcones.svg"></Image>
            <Image alt="img" src="/header/instomcones.svg"></Image>
            <Image alt="img" src="/header/linkedincones.svg"></Image>
          </Flex>
        </Box>
        <Flex
          justifyContent={'space-between'}
          gap={{ base: '20px', md: '100px' }}
          flexDirection={{ base: 'column', md: 'row' }}
          mb="32px"
        >
          <Box w={{ base: '100%', md: '20%' }}>
            <Text
              mb="30px"
              color="#FFF"
              fontSize="24px"
              fontWeight="600"
              lineHeight={'20px'}
              textAlign={{ base: 'center', md: 'left' }}
            >
              Discover
            </Text>
            {Discover.map((Disc) => (
              <Box>
                <Text
                  mb="20px"
                  color="#FFF"
                  fontSize="20px"
                  fontWeight="400"
                  lineHeight={'20px'}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  {Disc.Text}
                </Text>
              </Box>
            ))}
          </Box>
          <Box w={{ base: '100%', md: '20%' }}>
            <Text
              mb="30px"
              color="#FFF"
              fontSize="24px"
              fontWeight="600"
              lineHeight={'20px'}
              textAlign={{ base: 'center', md: 'left' }}
            >
              Categories
            </Text>
            {Categories.map((Disc) => (
              <Box>
                <Text
                  mb="20px"
                  color="#FFF"
                  fontSize="20px"
                  fontWeight="400"
                  lineHeight={'20px'}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  {Disc.Text}
                </Text>
              </Box>
            ))}
          </Box>
          <Box w={{ base: '100%', md: '20%' }}>
            <Text
              mb="30px"
              color="#FFF"
              fontSize="24px"
              fontWeight="600"
              lineHeight={'20px'}
              textAlign={{ base: 'center', md: 'left' }}
            >
              Company
            </Text>
            {Company.map((Disc) => (
              <Box>
                <Text
                  mb="20px"
                  color="#FFF"
                  fontSize="20px"
                  fontWeight="400"
                  lineHeight={'20px'}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  {Disc.Text}
                </Text>
              </Box>
            ))}
          </Box>
          <Box w={{ base: '100%', md: '30%' }}>
            <Text
              mb="30px"
              color="#FFF"
              fontSize="24px"
              fontWeight="600"
              lineHeight={'20px'}
              textAlign={{ base: 'center', md: 'left' }}
            >
              Subscribe
            </Text>
            <Box bg="rgba(42, 84, 73, 0.8)" py="15px" borderRadius={'10px'}>
              <Flex alignItems={'center'}>
                <Input w="80%" border="none" placeholder="Your email address" />
                <Text
                  color="#FFF"
                  fontSize="20px"
                  fontWeight="500"
                  lineHeight={'20px'}
                >
                  Send
                </Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footers;
