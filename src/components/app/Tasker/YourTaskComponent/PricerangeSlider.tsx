import React from 'react';
import {
 
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,

} from '@chakra-ui/react';

function PriceRangeSlider() {
  const [minPrice, setMinPrice] = React.useState(30);
  const [maxPrice, setMaxPrice] = React.useState(80);

  return (
    <RangeSlider
      aria-label={['min', 'max']}
      defaultValue={[minPrice, maxPrice]}
      onChange={(values) => {
        setMinPrice(values[0]);
        setMaxPrice(values[1]);
      }}
    >
      <RangeSliderTrack bg="red.100">
        <RangeSliderFilledTrack bg="#000000" />
      </RangeSliderTrack>
      <RangeSliderThumb
        boxSize={6}
        index={0}
        border="1px solid #000000"
        p="5px"
      >
        <Box color="tomato">
          <Text fontSize="sm" textAlign="center" color="#000000">
            {minPrice}
          </Text>
        </Box>
      </RangeSliderThumb>
      <RangeSliderThumb
        boxSize={6}
        index={1}
        border="1px solid #000000"
        p="5px"
      >
        <Box color="tomato">
          <Text fontSize="sm" textAlign="center" color="#000000">
            {maxPrice}
          </Text>
        </Box>
      </RangeSliderThumb>
    </RangeSlider>
  );
}
export default PriceRangeSlider;
