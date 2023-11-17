import { Box, Flex, Text, Checkbox, Heading } from '@chakra-ui/react';
import React from 'react';
import DatesRadio from './DatesRadio';
import TimeDropdown from './TimeDropdown';
import PriceRangeSlider from './PricerangeSlider';
import TaskerCard from './TaskerCard';

function Step2Content() {
  return (
    <>
      <Box>
        <Flex gap="30px" flexDirection={{ base: 'column', lg: 'row' }}>
          <Box w={{ base: '100%', lg: '30%' }}>
            <Box border="1px solid #CFCFCF" borderRadius={'10px'} p="30px">
              <Box mb="20px" pb="20px" borderBottom="1px solid #7C7C7C">
                <Text
                  fontWeight="600"
                  fontSize={{
                    base: '18px',
                    md: '20px',
                    lg: '24px',
                  }}
                  lineHeight="150% "
                  color="#1F1F1F"
                  mb="8px"
                >
                  Date
                </Text>
                <DatesRadio />
              </Box>
              <Box pb="20px" borderBottom="1px solid #7C7C7C" mb="20px">
                <Text
                  fontWeight="600"
                  fontSize={{
                    base: '18px',
                    md: '20px',
                    lg: '24px',
                  }}
                  lineHeight="150% "
                  color="#1F1F1F"
                  mb="8px"
                >
                  Time of Day
                </Text>
                <Box mb="10px">
                  <Checkbox size="lg" colorScheme="red">
                    Morning (8am - 12pm)
                  </Checkbox>
                </Box>
                <Box mb="10px">
                  <Checkbox size="lg" colorScheme="red">
                    Affternoon (12pm - 5pm)
                  </Checkbox>
                </Box>
                <Box mb="10px">
                  <Checkbox size="lg" colorScheme="red">
                    Evening (5pm - 9:30pm)
                  </Checkbox>
                </Box>
                <Box p={4}>
                  <Heading
                    size="lg"
                    textAlign="center"
                    borderBottom="1px solid #000"
                    lineHeight="0.1em"
                    margin="10px 0 20px"
                  >
                    <Text
                      as="span"
                      style={{ background: '#fff', padding: '0 10px' }}
                      fontWeight="500"
                      fontSize="14px"
                      color="#1F1F1F"
                    >
                      or choose a specific time
                    </Text>
                  </Heading>
                </Box>
                <Box>
                  <TimeDropdown />
                </Box>
              </Box>
              <Box>
                <Text
                  mb="20px"
                  fontWeight="600"
                  fontSize={{
                    base: '18px',
                    md: '20px',
                    lg: '24px',
                  }}
                  lineHeight="150% "
                  color="#1F1F1F"
                >
                  Price
                </Text>
                <PriceRangeSlider />
                <Text
                  textAlign={'center'}
                  my="20px"
                  fontWeight="500"
                  fontSize={{
                    base: '18px',
                    md: '20px',
                    lg: '20px',
                  }}
                  lineHeight="150% "
                  color="#1F1F1F"
                >
                  The average hourly rate is $61/hr
                </Text>
              </Box>
              <Box>
                <Text
                  fontWeight="600"
                  fontSize={{
                    base: '18px',
                    md: '20px',
                    lg: '24px',
                  }}
                  lineHeight="150% "
                  color="#1F1F1F"
                  mb="8px"
                >
                  Tasker Type
                </Text>
                <Box mb="10px">
                  <Checkbox size="lg" colorScheme="red">
                    Elite Tasker
                  </Checkbox>
                </Box>
                <Box mb="10px">
                  <Checkbox size="lg" colorScheme="red">
                    Great value
                  </Checkbox>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box w={{ base: '100%', lg: '70%' }}>
            <TaskerCard />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Step2Content;
