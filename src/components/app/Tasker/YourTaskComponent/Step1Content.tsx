import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
  Flex,
  RadioGroup,
  Radio,
  Textarea,
} from '@chakra-ui/react';

interface FormData {
  StreetAddress: string;
  Unit: string;
  description: string;
  location: string;
  date: string;
}
const Step1Content = () => {
  const [formData, setFormData] = useState<FormData>({
    StreetAddress: '',
    Unit: '',
    description: '',
    location: '',
    date: '',
  });
  const [step, setStep] = useState(1);
  const [validations, setValidations] = useState<Partial<FormData>>({}); // Initialize validations with the same structure as FormData

  const handleNextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const validateStep = () => {
    const errors: Partial<FormData> = {};
    if (step === 1) {
      if (!formData.StreetAddress) {
        errors.StreetAddress = 'Street address is required';
      }
      // Add more validation rules for the first step here
    }
    // You can add validation for other steps as needed

    if (Object.keys(errors).length > 0) {
      setValidations(errors);
      return false;
    } else {
      setValidations({}); // Clear any previous errors
      return true;
    }
  };

  return (
    <Box p={4}>
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
        Furniture Assembly
      </Text>
      <form>
        <Box>
          {step >= 1 && (
            <Box
              mb="30px"
              borderRadius={'5px'}
              border="1px solid #CFCFCF"
              p={{ base: '20px', lg: '40px' }}
            >
              <FormControl id="title" mb={4}>
                <FormLabel
                  fontWeight="500"
                  fontSize={{
                    base: '18px',
                    md: '20px',
                    lg: '24px',
                  }}
                  lineHeight="150% "
                  color="#000000"
                  mb="20px"
                >
                  Your task location
                </FormLabel>
                <Flex gap="20px">
                  <Box w="70%">
                    <Input
                      h={{ base: '35px', md: '45px', lg: '85px' }}
                      placeholder="Street address"
                      borderRadius={'5px'}
                      border="1px solid #CFCFCF"
                      type="text"
                      value={formData.StreetAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          StreetAddress: e.target.value,
                        })
                      }
                    />
                    {validations.StreetAddress ? (
                      <Text color="red">{validations.StreetAddress}</Text>
                    ) : (
                      <Text color="green">✓</Text>
                    )}
                  </Box>
                  <Box w="30%">
                    <Input
                      h={{ base: '35px', md: '45px', lg: '85px' }}
                      placeholder="Unit or apt#"
                      borderRadius={'5px'}
                      border="1px solid #CFCFCF"
                      type="text"
                      value={formData.Unit}
                      onChange={(e) =>
                        setFormData({ ...formData, Unit: e.target.value })
                      }
                    />
                  </Box>
                </Flex>
              </FormControl>
            </Box>
          )}

          {step >= 2 && (
            <Box
              mb="30px"
              borderRadius={'5px'}
              border="1px solid #CFCFCF"
              p={{ base: '20px', lg: '40px' }}
            >
              <FormControl id="description" mb={4}>
                <FormLabel
                  fontWeight="500"
                  fontSize={{
                    base: '18px',
                    md: '20px',
                    lg: '24px',
                  }}
                  lineHeight="150% "
                  color="#000000"
                  mb="20px"
                >
                  Your Items
                </FormLabel>
                <Text
                  fontWeight="500"
                  fontSize={{
                    base: '18px',
                    md: '20px',
                    lg: '24px',
                  }}
                  lineHeight="150% "
                  color="#000000"
                  mb="20px"
                >
                  What type of furniture do you need assembled or disassembled?
                </Text>
                <RadioGroup name="form-name">
                  <Box mb="10px">
                    <Radio value="1">IKEA furniture items only</Radio>
                  </Box>

                  <Box mb="10px">
                    <Radio value="2">Other furniture items (non-IKEA)</Radio>
                  </Box>
                  <Box mb="10px">
                    <Radio value="3">Both IKEA and non-IKEA furniture</Radio>
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
          )}

          {step >= 3 && (
            <Box
              mb="30px"
              borderRadius={'5px'}
              border="1px solid #CFCFCF"
              p={{ base: '20px', lg: '40px' }}
            >
              <FormControl id="description" mb={4}>
                <FormLabel
                  fontWeight="500"
                  fontSize={{
                    base: '18px',
                    md: '20px',
                    lg: '24px',
                  }}
                  lineHeight="150% "
                  color="#000000"
                  mb="20px"
                >
                  Task options
                </FormLabel>
                <Text
                  fontWeight="500"
                  fontSize={{
                    base: '18px',
                    md: '20px',
                    lg: '24px',
                  }}
                  lineHeight="150% "
                  color="#000000"
                  mb="20px"
                >
                  How big is your task?
                </Text>
                <RadioGroup
                  name="form-name"
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  <Box mb="10px">
                    <Radio value="1">Small-Est. 1hr</Radio>
                  </Box>

                  <Box mb="10px">
                    <Radio value="2">Medium-Est. 2-3hrs</Radio>
                  </Box>
                  <Box mb="10px">
                    <Radio value="3">Large-Est. 4+hrs</Radio>
                  </Box>
                </RadioGroup>
              </FormControl>
              <FormControl id="description" mb={4}>
                <Text
                  fontWeight="500"
                  fontSize={{
                    base: '18px',
                    md: '20px',
                    lg: '24px',
                  }}
                  lineHeight="150% "
                  color="#000000"
                  mb="20px"
                >
                  Vehicle Requirements
                </Text>
                <RadioGroup name="form-name">
                  <Box mb="10px">
                    <Radio value="1">Not need for task</Radio>
                  </Box>

                  <Box mb="10px">
                    <Radio value="2">Task requires a car</Radio>
                  </Box>
                  <Box mb="10px">
                    <Radio value="3">Task requires a truck</Radio>
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
          )}
          {step >= 4 && (
            <Box
              mb="30px"
              borderRadius={'5px'}
              border="1px solid #CFCFCF"
              p={{ base: '20px', lg: '40px' }}
            >
              <FormControl id="description" mb={4}>
                <FormLabel
                  fontWeight="500"
                  fontSize={{
                    base: '18px',
                    md: '20px',
                    lg: '24px',
                  }}
                  lineHeight="150% "
                  color="#000000"
                  mb="20px"
                >
                  Tell us the details of your task
                </FormLabel>
                <Text
                  fontWeight="400"
                  fontSize={{
                    base: '14px',
                    md: '16px',
                    lg: '16px',
                  }}
                  lineHeight="150% "
                  color="#000000"
                  mb="20px"
                >
                  Start the conversation and tell your Tasker what you need
                  done. This helps us show you only qualified and available
                  Taskers for the job. Dont worry, you can edit this later.
                </Text>
                <Textarea
                  resize={'none'}
                  h="120px"
                  p="20px"
                  placeholder="Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job. Dont worry, you can edit this later."
                />
              </FormControl>
              <Text
                fontWeight="400"
                fontSize={{
                  base: '14px',
                  md: '16px',
                  lg: '16px',
                }}
                lineHeight="150% "
                color="#000000"
                mb="20px"
              >
                If you need two or more Taskers, please post additional task for
                each Tasker needed.
              </Text>
            </Box>
          )}

          {step <= 5 ? (
            <Flex justifyContent={'center'}>
              <Button
                colorScheme="#1F4A40"
                bg="#1F4A40"
                mt={4}
                onClick={handleNextStep}
              >
                Continue
              </Button>
            </Flex>
          ) : (
            <Text>Form completed!</Text>
          )}
        </Box>
      </form>
    </Box>
  );
};

export default Step1Content;
