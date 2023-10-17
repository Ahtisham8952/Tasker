// import { gql, useLazyQuery } from '@apollo/client';
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Link,
//   Text,
// } from '@chakra-ui/react';
// import { useRouter } from 'next/router';
// import { setCookie } from 'nookies';
// import { FC, FormEvent, useState } from 'react';
// import LayoutWrapper from '../LayoutWrapper/LayoutWrapper';

// const LOGIN_QUERY = gql`
//   query LoginUser($email: String!, $password: String!) {
//     loginUser(loginUserInput: { email: $email, password: $password }) {
//       accessToken
//       userType
//       id
//       name
//       email
//       profileImageURL
//     }
//   }
// `;

// const MY_PROVIDER_QUERY = gql`
//   query FindMyProvider {
//     findMyProvider {
//       id
//       createdAt
//       updatedAt
//       name
//       titleName
//       missionStatementImageURL
//       missionStatementImageKey
//       bannerURL
//       bannerKey
//       pageTemplate
//       email
//     }
//   }
// `;

// const LoginPage: FC<{ nextPage: () => void }> = ({ nextPage }) => {
//   const [login] = useLazyQuery(LOGIN_QUERY);
//   const [getMyProvider] = useLazyQuery(MY_PROVIDER_QUERY);
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [id, setid] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await login({
//         variables: {
//           email,
//           password,
//         },
//       });

//       if (response && response.data && response.data.loginUser) {
//         const { accessToken, ...rest } = response.data.loginUser;
//         const cookieValue = JSON.stringify({ ...response.data.loginUser });
//         setCookie(null, 'userData', cookieValue, cookiesOptions);
//         // Redirect to protected page after successful login
//         if (rest.userType === 'PARENT') {
//           router.push('/user');
//         } else {
//           try {
//             const myProvider = await getMyProvider();
//             if (
//               myProvider?.error?.message ===
//               "Cannot read properties of null (reading 'provider')"
//             ) {
//               router.push('/organization/login/1');
//             } else {
//               router.push('/organization');
//             }
//           } catch (err) {
//             console.log('err', err);
//           }
//         }
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError('An error occurred during login');
//     }
//   };

//   return (
//     <LayoutWrapper>
//       <Box maxW={'1760px'} w="100%" px="20px" mx={'auto'}>
//         <Box py={{ base: '40px', md: '85px' }}>
//           <Text
//             fontSize="48px"
//             fontWeight="700"
//             lineHeight="58px"
//             textAlign="center"
//           >
//             Login
//           </Text>

//           <Text
//             pt="30px"
//             maxW={'1195px'}
//             fontWeight="700px"
//             fontSize={{ base: '18px', md: '24px', lg: '26px', xl: '32px' }}
//             lineHeight={{ base: '28px', md: '34px', lg: '36px', xl: '40px' }}
//           >
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incid ut labore et dolore magna aliqua.
//           </Text>

//           <Text
//             color="#626262"
//             maxW={'1062px'}
//             fontWeight="300"
//             fontSize={{ base: '18px', md: '20px', lg: '22px', xl: '24px' }}
//             lineHeight={{ base: '18px', md: '30px', lg: '32px', xl: '34px' }}
//             pt="25px"
//             pb="15px"
//           >
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incid ut labore et dolore magna aliqua.
//           </Text>

//           <Box>
//             <form onSubmit={handleSubmit}>
//               <Flex
//                 display={'flex'}
//                 gap={{ base: '30px', md: '75px' }}
//                 maxW={'1450px'}
//                 w="100%"
//                 mt="75px"
//                 flexDirection={{ base: 'column', md: 'row' }}
//               >
//                 <FormControl isRequired>
//                   <FormLabel htmlFor="email">Email</FormLabel>

//                   <Box
//                     h={{ base: '45px', xl: '60px', xxl: '60px', xxxl: '90px' }}
//                     bg="white"
//                     borderRadius="5px"
//                   >
//                     <Input
//                       fontSize="14px"
//                       fontWeight="300"
//                       id="email"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       lineHeight={'150%'}
//                       h="100%"
//                       placeholder="Enter you Username"
//                       border="none"
//                       _focusVisible={{ border: 'none' }}
//                     />
//                   </Box>
//                 </FormControl>

//                 <FormControl isRequired>
//                   <FormLabel htmlFor="password">Password</FormLabel>

//                   <Box
//                     h={{ base: '45px', xl: '60px', xxl: '60px', xxxl: '90px' }}
//                     bg="white"
//                     borderRadius="5px"
//                   >
//                     <Input
//                       fontSize="14px"
//                       fontWeight="300"
//                       lineHeight={'150%'}
//                       id="password"
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       h="100%"
//                       _focusVisible={{ border: 'none' }}
//                       placeholder="Enter your Password"
//                     />
//                   </Box>
//                 </FormControl>
//               </Flex>
//               <Flex pt="50px " gap="30px" alignItems={'center'}>
//                 <Button
//                   type="submit"
//                   bg="#1F1F1F"
//                   colorScheme={'#1F1F1F'}
//                   color="#FFFFFF"
//                   fontSize="14px"
//                   fontWeight="400"
//                   lineHeight={'150%'}
//                   p="8px 40px"
//                   borderRadius={'50px'}
//                   border="1px solid white"
//                 >
//                   Login
//                 </Button>
//                 {error && <Box color="red">{error}</Box>}
//               </Flex>
//             </form>
//           </Box>

//           <Box pt="40px">
//             <Flex gap="20px">
//               <Text fontSize="16px" color="#717171">
//                 Lost Password ?
//               </Text>
//               <Text fontSize="16px" color="#717171" fontWeight="bold">
//                 Reset your password
//               </Text>
//             </Flex>
//           </Box>

//           <Box mt="20px">
//             <Text
//               color="#1F1F1F"
//               fontSize="18px"
//               fontWeight="400"
//               lineHeight={'150%'}
//             >
//               Not Registered yet?
//               <Link
//                 mx="10px"
//                 fontSize={{ base: '14px', lg: '20px' }}
//                 href="/signup"
//                 textDecoration={'underline'}
//                 fontWeight="600"
//               >
//                 Create an account
//               </Link>
//             </Text>
//           </Box>
//         </Box>
//       </Box>
//     </LayoutWrapper>
//   );
// };

// export default LoginPage;
