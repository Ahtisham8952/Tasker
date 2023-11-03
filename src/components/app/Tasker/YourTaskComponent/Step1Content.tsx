import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

const Step1Content = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
  });
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  // const validateFormData = (data) => {
  //   return (
  //     data.title !== '' &&
  //     data.description !== '' &&
  //     data.location !== '' &&
  //     data.date !== ''
  //   );
  // };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        Task Booking
      </Text>
      <form>
        {step === 1 && (
          <FormControl id="title" mb={4}>
            <FormLabel>Task Title</FormLabel>
            <Input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </FormControl>
        )}
        {step === 2 && (
          <FormControl id="description" mb={4}>
            <FormLabel>Task Description</FormLabel>
            <Input
              type="text"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </FormControl>
        )}
        {step === 3 && (
          <FormControl id="location" mb={4}>
            <FormLabel>Location</FormLabel>
            <Input
              type="text"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </FormControl>
        )}
        {step === 4 && (
          <FormControl id="date" mb={4}>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </FormControl>
        )}
        {step <= 4 ? (
          <Button colorScheme="teal" mt={4} onClick={handleNextStep}>
            Continue
          </Button>
        ) : (
          <Text>Form completed!</Text>
        )}
      </form>
    </Box>
  );
};

export default Step1Content;
