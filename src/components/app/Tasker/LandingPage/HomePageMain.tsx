import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from './HeroSection';
import NeedSomethingDoneSection from './NeedSomethingDoneSection';
import PopularServices from './PopularServices';
import LifeMadeEasierSection from './LifeMadeEasierSection';
import FeaturedTaskSlider from './FeaturedTaskSlider';
import GotoTeamSection from './GotoTeamSection';
import TakeOurWordSection from './TakeOurWordSection';
import ReadyToGetStarted from './ReadyToGetStarted';
import CitiesWhereWeWork from './CitiesWhereWeWork';
import LayoutWrapper from '../../../core/LayoutWrapper/LayoutWrapper';
const HomePageMain = () => {
  return (
    <>
      <LayoutWrapper>
        <Box bg="white">
          <HeroSection />
          <Box
            pt={{ base: '50px', lg: '100px' }}
            maxW={'1760px'}
            mx={'auto'}
            px="20px"
          >
            <NeedSomethingDoneSection />

            <PopularServices />

            <LifeMadeEasierSection />

            <FeaturedTaskSlider />

            <GotoTeamSection />

            <TakeOurWordSection />

            <ReadyToGetStarted />
            <CitiesWhereWeWork />
          </Box>
        </Box>
      </LayoutWrapper>
    </>
  );
};

export default HomePageMain;
