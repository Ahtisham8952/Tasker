import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types'; // Import PropTypes

function CountAnimation({ targetCount, duration, Name }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;

      if (elapsedTime < duration) {
        const progress = (elapsedTime / duration) * targetCount;
        setCount(Math.min(progress, targetCount));
        requestAnimationFrame(animateCount);
      } else {
        setCount(targetCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [targetCount, duration]);

  return (
    <Box>
      <Text
        fontWeight="700"
        fontSize={{ base: '22px', lg: '32px' }}
        lineHeight="150%"
        color="#FFFFFF"
      >
        {Math.round(count).toLocaleString()}M
      </Text>
      <Text fontWeight="500" fontSize="16px" lineHeight="150%" color="#FFFFFF">
        {Name}
      </Text>
    </Box>
  );
}

// Add PropTypes validation
CountAnimation.propTypes = {
  targetCount: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  Name: PropTypes.string.isRequired,
};

export default CountAnimation;
