// import { Box } from '@chakra-ui/react';
// import { useState } from 'react';
// import { OrganizationProfile } from '../../app/Flok/OrganizationComponent/OrganizationProfile';
// import LayoutWrapper from '../LayoutWrapper/LayoutWrapper';
// import { OrganizationloginStepOne } from './OrganizationloginStepOne';
// import { OrganizationloginStepTwo } from './OrganizationloginStepTwo';

// const OrganizationLogin = () => {
//   const [step, setStep] = useState('one');

//   const changeStep = (value: string) => {
//     setStep(value);
//     console.log(value);
//   };

//   return (
//     <Box>
//       {step === 'one' && (
//         <Box>
//           <LayoutWrapper>
//             <OrganizationloginStepOne nextStep={() => changeStep('two')} />
//           </LayoutWrapper>
//         </Box>
//       )}
//       {step === 'two' && (
//         <Box>
//           <LayoutWrapper>
//             <OrganizationloginStepTwo seeProfile={() => changeStep('three')} />
//           </LayoutWrapper>
//         </Box>
//       )}
//       {step === 'three' && (
//         <Box>
//           <OrganizationProfile />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default OrganizationLogin;
