import React from 'react';
import { Box, Link } from '@chakra-ui/react';

const MenuLinks = ({
  MenuText,
  MenuLink,
}: {
  MenuText: string;
  MenuLink: string;
}) => {
  return (
    <>
      <Box
        w={'100%'}
        py={'8px'}
        borderBottom={'1px solid #688DB370'}
        _last={{ borderBottom: 'none' }}
      >
        <Link
          href={MenuLink}
          width={'100%'}
          fontWeight={'500'}
          fontSize={'15px'}
          lineHeight={'25px'}
          color={'#4A607C'}
          _hover={{ textDecoration: 'none', color: '#4A607C', opacity: '0.8' }}
        >
          {MenuText}
        </Link>
      </Box>
    </>
  );
};

export default MenuLinks;
