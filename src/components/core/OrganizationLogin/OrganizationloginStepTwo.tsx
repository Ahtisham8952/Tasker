import {
  Box,
  Button,
  Checkbox,
  Heading,
  InputGroup,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Upload } from './Upload';

export const OrganizationloginStepTwo: FC<{ seeProfile: () => void }> = ({
  seeProfile,
}) => {
  const router = useRouter();
  const [bannerImage, setBannerImage] = useState<File | null>(null);
  const [mission, setMission] = useState('');
  const [about, setAbout] = useState('');
  const [staff, setStaff] = useState('');
  const [staffImages, setStaffImages] = useState<File[]>([]);

  const handleBannerImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setBannerImage(file);
  };

  const handleStaffImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files!);
    setStaffImages(files);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Banner Image:', bannerImage);
    console.log('Mission Statement:', mission);
    console.log('About:', about);
    console.log('Staff Details:', staff);
    console.log('Staff Images:', staffImages);

    setBannerImage(null);
    setMission('');
    setAbout('');
    setStaff('');
    setStaffImages([]);
    router.push('/organization');
  };
  return (
    <Box p="30px">
      <Heading
        as="h2"
        fontSize={{ base: '40px', md: '40px', lg: '70px' }}
        fontWeight="700"
        lineHeight={{ base: '50px', md: '50px', lg: '74px' }}
        textAlign="center"
        pt="5px"
        pb="15px"
      >
        Welcome to Flok for oganizations{' '}
      </Heading>
      <Heading
        as="h2"
        fontSize={{ base: '40px', md: '40px', lg: '70px' }}
        fontWeight="700"
        lineHeight={{ base: '50px', md: '50px', lg: '74px' }}
        textAlign="center"
        pt="5px"
        pb="15px"
      >
        Step #2 of 2
      </Heading>
      <Box textAlign="center">
        <Text fontSize="17px" fontWeight="300" lineHeight="27px">
          Welcome to Flok for oganizations
        </Text>
        <Box maxW="556px" margin="auto">
          <Text fontSize="17px" fontWeight="300" lineHeight="27px">
            The process is simple, first tell us about your organization and
            once we verify you, you will be able to go live with your events.
            The hole process normally takes xx hours.
          </Text>
        </Box>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          mt="20px"
          flexDirection="row"
        >
          <Box
            bgColor="#E0E0E0"
            p={{ base: '20px', md: '20px', lg: '40px' }}
            borderRadius="20px"
            width={{ base: '100%', md: '100%', lg: '60%', xl: '60%' }}
          >
            <Box display="flex" maxW="400px" justifyContent="space-between">
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262
  "
              >
                Organization banner imagre:{' '}
              </Text>
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262"
              >
                Upload Image:{' '}
              </Text>
              <Upload FileInput={handleBannerImageChange} />
            </Box>
            <Box
              display="flex"
              maxW="400px"
              justifyContent="space-between"
              mt="30px"
            >
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262
  "
              >
                Your mission statement:{' '}
              </Text>
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262"
              >
                Upload Image:{' '}
              </Text>
              <Upload />
            </Box>
            <InputGroup
              mt="20px"
              bgColor="white"
              p={{ base: '0px', md: '0px', lg: '10px' }}
              borderRadius="10px"
              height="120px"
            >
              <Textarea
                value={mission}
                onChange={(e) => setMission(e.target.value)}
                resize={'none'}
                _focusVisible={{ border: 'none' }}
                placeholder="Text"
                border="none"
              />{' '}
            </InputGroup>
            <Box
              display="flex"
              maxW="400px"
              justifyContent="space-between"
              mt="30px"
            >
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262
  "
              >
                About you:{' '}
              </Text>
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262"
              >
                Upload Image:{' '}
              </Text>
              <Upload />
            </Box>
            <InputGroup
              mt="20px"
              bgColor="white"
              p={{ base: '0px', md: '0px', lg: '10px' }}
              borderRadius="10px"
              height="120px"
            >
              <Textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                resize={'none'}
                _focusVisible={{ border: 'none' }}
                placeholder="Text"
                border="none"
              />{' '}
            </InputGroup>
            <Box
              display="flex"
              maxW="400px"
              justifyContent="space-between"
              mt="30px"
            >
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262
  "
              >
                Staff details:{' '}
              </Text>
              <Text
                fontSize="13px"
                fontWeight="300"
                lineHeight="20px"
                textColor="#626262"
              >
                Upload Image:{' '}
              </Text>
              <Upload FileInput={handleStaffImageChange} />
            </Box>
            <InputGroup
              mt="20px"
              bgColor="white"
              p={{ base: '0px', md: '0px', lg: '10px' }}
              borderRadius="10px"
              height="120px"
            >
              <Textarea
                value={staff}
                onChange={(e) => setStaff(e.target.value)}
                resize={'none'}
                _focusVisible={{ border: 'none' }}
                placeholder="Text"
                border="none"
              />{' '}
            </InputGroup>
            <Box>
              <Text
                fontWeight="700"
                fontSize="20px"
                textColor="##1F1F1F"
                pt={{ base: '5', md: '5', lg: '14' }}
              >
                Options:
              </Text>

              <Box mt="5">
                <Stack gap="5px">
                  <Checkbox size="md" borderColor={'black'}>
                    Show Mission statment
                  </Checkbox>
                  <Checkbox size="md" borderColor={'black'}>
                    Show About you
                  </Checkbox>
                  <Checkbox size="md" borderColor={'black'}>
                    Show Organization details
                  </Checkbox>
                  <Checkbox size="md" defaultChecked borderColor={'black'}>
                    Show staff deails
                  </Checkbox>
                  <Checkbox size="md" borderColor={'black'}>
                    Handicapt friendly
                  </Checkbox>
                </Stack>
              </Box>
            </Box>
            <Box pt="25px">
              <Button
                mt="30px"
                bg="#1F1F1F"
                colorScheme={'#1F1F1F'}
                color="#FFFFFF"
                fontSize={{ base: '11px', md: '14px' }}
                fontWeight="400"
                lineHeight={'150%'}
                p="8px 40px"
                borderRadius={'50px'}
                border="1px solid white"
                w="100%"
                //  onClick={seeProfile}
                type="submit"
              >
                Save Oraganization details (You will be able to edit to these
                later)
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
