import { Box, Heading, Text } from '@chakra-ui/react';
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper';

export const TermsPage = () => {
  return (
    <LayoutWrapper>
      <Box p="30px" h="100vh">
        <Heading
          as="h2"
          fontSize="48px"
          fontWeight="700px"
          lineHeight="58px"
          pt="5"
          pb="15"
        >
          Terms & Conditions
        </Heading>
        <Text
          fontWeight="300px"
          fontSize="16px"
          lineHeight="25px "
          pt="5px"
          pr="30px"
        >
          Complete the egistration to enhance your Flok experience and unliock
          enhanced features.
        </Text>
        <Text
          fontWeight="300px"
          fontSize="16px"
          lineHeight="25px "
          pt="5px"
          pr="30px"
        >
          Complete the egistration to enhance your Flok experience and unliock
          enhanced features.Complete the egistration to enhance your Flok
          experience and unliock enhanced features.Complete the egistration to
          enhance your Flok experience and unliock enhanced features.Complete
          the egistration to enhance your Flok experience and unliock enhanced
          features.Complete the egistration to enhance your Flok experience and
          unliock enhanced features.Complete the egistration to enhance your
          Flok experience and unliock enhanced features.
        </Text>
      </Box>
    </LayoutWrapper>
  );
};
