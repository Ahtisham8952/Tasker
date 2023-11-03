import React, { useState } from 'react';
import {
  Box,
  Button,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from '@chakra-ui/react';
import Step1Content from './Step1Content';
import Step2Content from './Step2Content';

const steps = [
  { title: 'First', description: 'Contact Info' },
  { title: 'Second', description: 'Date & Time' },
  { title: 'Third', description: 'Select Rooms' },
];

function YourTaskMain() {
  const [activeStep, setActiveStep] = useState(0);

  const handleContinue = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Box>
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Box mt={4}>
        {activeStep === 0 && <Step1Content />}
        {activeStep === 1 && <Step2Content />}
        {activeStep === 2 && <Step1Content />}
      </Box>
      <Button
        onClick={handleContinue}
        colorScheme="teal"
        mt={4}
        isDisabled={activeStep === steps.length - 1}
      >
        Continue
      </Button>
    </Box>
  );
}

export default YourTaskMain;
