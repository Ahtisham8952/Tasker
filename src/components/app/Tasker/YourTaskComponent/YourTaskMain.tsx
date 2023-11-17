import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Image,
  Step,
 
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
} from '@chakra-ui/react';
import Step1Content from './Step1Content';
import Step2Content from './Step2Content';

const steps = [
  { title: 'Discribe your task' },
  { title: 'Browse Taskers & prices' },
  { title: 'Choose date & time' },
  { title: 'Confirm details' },
];

function YourTaskMain() {
  const [activeStep, setActiveStep] = useState(0);

  const handleContinue = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Box py="50px">
      <Flex maxW={'1500px'} px="20px" mx="auto" alignItems={'center'}>
        <Box w="30%">
          <Image alt="img" src="/tasker/taskerlogo.png"></Image>
        </Box>
        <Box w="70%">
          <Stepper index={activeStep}>
            {steps.map((step, index) => (
              <Step key={index}>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box
                    mt="5px"
                    textAlign={'center'}
                    fontWeight="400"
                    fontSize={{
                      base: '14px',
                      md: '16px',
                      lg: '20px',
                    }}
                    lineHeight="150% "
                    color="#000000"
                  >
                    <StepTitle>{step.title}</StepTitle>
                  </Box>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>
      </Flex>
      <Box my="50px">
        <Text
          textAlign={'center'}
          fontWeight="500"
          fontSize={{
            base: '14px',
            md: '16px',
            lg: '20px',
          }}
          lineHeight="150% "
          color="#000000"
        >
          Tell us about your task. We use these details to show Taskers in your
          area who fit your needs.
        </Text>
      </Box>
      <Box>
        <Box mt={4}>
          <Box maxW={'1253px'} mx="auto" px="20px">
            {activeStep === 0 && <Step1Content />}
          </Box>
          <Box maxW={'1720px'} mx="auto" px="20px">
            {activeStep === 1 && <Step2Content />}
          </Box>

          <Box> {activeStep === 2 && <Step2Content />}</Box>
        </Box>
        <Button
          onClick={handleContinue}
          mt={4}
          isDisabled={activeStep === steps.length - 1}
          colorScheme="#1F4A40"
          bg="#1F4A40"
        >
          See Tasker & Prices
        </Button>
      </Box>
    </Box>
  );
}

export default YourTaskMain;
