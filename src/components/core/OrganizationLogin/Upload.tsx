import { Box, Image, Img, Input } from '@chakra-ui/react';
import React, { FC } from 'react';

export const Upload: FC<{
  FileInput?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}> = ({ FileInput }) => {
  return (
    <Box display="flex">
      <label id="file-input">
        <Image alt="img" src="/upload.svg" />
      </label>
      <Input onChange={FileInput} display="none" id="file-input" type="file" />
    </Box>
  );
};
