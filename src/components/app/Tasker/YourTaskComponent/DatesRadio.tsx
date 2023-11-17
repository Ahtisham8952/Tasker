import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { useRadio, useRadioGroup } from '@chakra-ui/react';
import PropTypes from 'prop-types';  // Import prop-types

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        border="1px solid #1F4A40"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: '#1F4A40',
          color: 'white',
          borderColor: '#1F4A40',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
        textAlign={'center'}
      >
        {props.children}
      </Box>
    </Box>
  );
}

// Add prop types for the RadioCard component
RadioCard.propTypes = {
  children: PropTypes.node.isRequired,
};

function DatesRadio() {
  const options = ['Today', 'Within 3 Days', 'Within a Week', 'Choose Dates'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Within a Week',
    onChange: (value) => console.log(value),
  });

  const group = getRootProps();

  return (
    <Grid
      mb="30px"
      gap="24px"
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(2, 1fr)',
        xl: 'repeat(2, 1fr)',
      }}
      w="100%"
      {...group}
    >
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </Grid>
  );
}

export default DatesRadio;
