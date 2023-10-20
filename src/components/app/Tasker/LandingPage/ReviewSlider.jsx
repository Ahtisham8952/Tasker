import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';

const FeaturedTaskerData = [
  {
    Image: '/header/tasker1.svg',
    TaskerName: 'Jeffrey C.',
    TaskerReviews: '100% positive reviews',
    CompletedTasks: ' 174 completed tasks',
    MovingRate: ' $52.94/hr',
    RepairRate: '$52.94/hr',
    AssemblyRate: '$47.05/hr',
    Description:
      'I have supplies and resources available for helping you with your move ins, move outs and move aroun',
  },
  {
    Image: '/header/tasker2.svg',
    TaskerName: 'John K.',
    TaskerReviews: '99% positive reviews',
    CompletedTasks: ' 1953 completed tasks',
    MovingRate: ' $52.94/hr',
    RepairRate: '$52.94/hr',
    AssemblyRate: '$47.05/hr',
    Description:
      'I have supplies and resources available for helping you with your move ins, move outs and move aroun',
  },
  {
    Image: '/header/tasker3.svg',
    TaskerName: 'Jeffrey C.',
    TaskerReviews: '100% positive reviews',
    CompletedTasks: ' 174 completed tasks',
    MovingRate: ' $52.94/hr',
    RepairRate: '$52.94/hr',
    AssemblyRate: '$47.05/hr',
    Description:
      'I have supplies and resources available for helping you with your move ins, move outs and move aroun',
  },
  {
    Image: '/header/tasker1.svg',
    TaskerName: 'Jeffrey C.',
    TaskerReviews: '100% positive reviews',
    CompletedTasks: ' 174 completed tasks',
    MovingRate: ' $52.94/hr',
    RepairRate: '$52.94/hr',
    AssemblyRate: '$47.05/hr',
    Description:
      'I have supplies and resources available for helping you with your move ins, move outs and move aroun',
  },
];

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box position={'relative'}>
        <Box w="100%" mx="auto">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {FeaturedTaskerData.map((TaskerData, index) => (
              <Box
                cursor={'pointer'}
                borderRadius={'20px'}
                key={index}
                m="10px"
              >
                <Box
                  _hover={{
                    boxShadow:
                      ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                  }}
                  border="1px solid #CFCFCF"
                  p={{ base: '15px', xxl: '15px', xxxl: '30px' }}
                  mx={{ base: '15px', md: '30px' }}
                  borderRadius={'20px'}
                >
                  <Box>
                    <Text
                      fontWeight="500"
                      fontSize="24px"
                      lineHeight="150% "
                      color="#5BBB7B"
                    >
                      Great Work
                    </Text>
                    <Text
                      mt="14px"
                      fontWeight="500"
                      fontSize={{
                        base: '14px',
                        md: '16px',
                        lg: '20px',
                      }}
                      lineHeight="150% "
                      color="#1F1F1F"
                    >
                      Dmitri was great Was fast to respond to the job worked
                      quickly but professionally and had all the appropriate
                      tools. Would recommend
                    </Text>
                  </Box>
                  <Flex my="50px" gap="20px" alignItems={'center'}>
                    <Box>
                      <Image alt="img" src="/header/futifullgirl.svg"></Image>
                    </Box>
                    <Box>
                      <Text
                        fontWeight="600"
                        fontSize="24px"
                        lineHeight="150% "
                        color="#1F1F1F"
                      >
                        Taylor B
                      </Text>
                      <Flex>
                        <Text
                          fontWeight="500"
                          fontSize="20px"
                          lineHeight="150% "
                          color="#5BBB7B"
                        >
                          Mounting
                        </Text>
                        <Image alt="img" src="/header/strareview.svg"></Image>
                      </Flex>
                      <Text
                        fontWeight="400"
                        fontSize="20px"
                        lineHeight="150% "
                        color="#1F1F1F"
                      >
                        October 11 2019 LA & OC
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
        <Box display={'flex'} justifyContent={'center'} gap="110px">
          <Button
            justifyContent={'right'}
            px="0px"
            onClick={this.next}
            bg="transparent"
            colorScheme={'transparent'}
            flexDirection={'column'}
          >
            <Image alt="img" src="/header/lefter1.svg"></Image>
          </Button>
          <Button
            flexDirection={'column'}
            justifyContent={'right'}
            px="0px"
            onClick={this.previous}
            bg="transparent"
            colorScheme={'transparent'}
          >
            <Image alt="img" src="/header/righter1.svg"></Image>
          </Button>
        </Box>
      </Box>
    );
  }
}
