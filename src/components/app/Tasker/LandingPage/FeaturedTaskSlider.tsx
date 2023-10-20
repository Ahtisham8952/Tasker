import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

type TaskerData = {
  Image: string;
  TaskerName: string;
  TaskerReviews: string;
  CompletedTasks: string;
  MovingRate: string;
  RepairRate: string;
  AssemblyRate: string;
  Description: string;
};

const FeaturedTaskerData: TaskerData[] = [
  {
    Image: '/header/tasker1.svg',
    TaskerName: 'Jeffrey C.',
    TaskerReviews: '100% positive reviews',
    CompletedTasks: '174 completed tasks',
    MovingRate: '$52.94/hr',
    RepairRate: '$52.94/hr',
    AssemblyRate: '$47.05/hr',
    Description:
      'I have supplies and resources available for helping you with your move ins, move outs and move aron...',
  },
  {
    Image: '/header/tasker2.svg',
    TaskerName: 'John K.',
    TaskerReviews: '99% positive reviews',
    CompletedTasks: '1953 completed tasks',
    MovingRate: '$52.94/hr',
    RepairRate: '$52.94/hr',
    AssemblyRate: '$47.05/hr',
    Description:
      'I have supplies and resources available for helping you with your move ins, move outs and move aroun...',
  },
  {
    Image: '/header/tasker3.svg',
    TaskerName: 'Jeffrey C.',
    TaskerReviews: '100% positive reviews',
    CompletedTasks: '174 completed tasks',
    MovingRate: '$52.94/hr',
    RepairRate: '$52.94/hr',
    AssemblyRate: '$47.05/hr',
    Description:
      'I have supplies and resources available for helping you with your move ins, move outs and move aroun...',
  },
  {
    Image: '/header/tasker1.svg',
    TaskerName: 'Jeffrey C.',
    TaskerReviews: '100% positive reviews',
    CompletedTasks: '174 completed tasks',
    MovingRate: '$52.94/hr',
    RepairRate: '$52.94/hr',
    AssemblyRate: '$47.05/hr',
    Description:
      'I have supplies and resources available for helping you with your move ins, move outs and move aroun...',
  },
];

export default class SimpleSlider extends Component {
  private slider: Slider | null = null;

  constructor(props: any) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    if (this.slider) {
      this.slider.slickNext();
    }
  }

  previous() {
    if (this.slider) {
      this.slider.slickPrev();
    }
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
      <Box position="relative" py={{ base: '30px', lg: '60px' }}>
        <Text
          mb="50px"
          fontWeight="600"
          fontSize={{
            base: '25px',
            md: '33px',
            xl: '41px',
            xxl: '44px',
            xxxl: '48px',
          }}
          lineHeight={{
            base: '30px',
            md: '40px',
            xl: '50px',
            xxl: '60px',
            xxxl: '70px',
          }}
          color="#1F1F1F"
        >
          Featured Taskers
        </Text>
        <Box
          position="absolute"
          display="flex"
          justifyContent="space-between"
          right="0px"
          top="50%"
          zIndex="99"
        >
          <Button
            justifyContent="right"
            px="0px"
            onClick={this.next}
            bg="transparent"
            colorScheme="transparent"
          >
            <Image
              alt="img"
              h={{ base: '20px', md: '30px' }}
              src="/header/rightarrowslide.svg"
            ></Image>
          </Button>
        </Box>
        <Box w="100%" mx="auto" pr={{ base: '20px', md: '40px', lg: '80px' }}>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {FeaturedTaskerData.map((TaskerData, index) => (
              <Box cursor="pointer" borderRadius="20px" key={index} m="10px">
                <Box
                  _hover={{
                    boxShadow:
                      ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                  }}
                  border="1px solid #CFCFCF"
                  p={{ base: '15px', xxl: '15px', xxxl: '30px' }}
                  mx={{ base: '15px', md: '30px' }}
                  borderRadius="20px"
                >
                  <Flex
                    alignItems="center"
                    gap="27px"
                    pb="24px"
                    borderBottom="1px solid #BFB3B3"
                    flexDirection={{ base: 'column', md: 'row' }}
                  >
                    <Box mb="20px">
                      <Image alt="img" w="100%" src={TaskerData.Image}></Image>
                    </Box>
                    <Box>
                      <Text
                        fontWeight="700"
                        fontSize={{
                          base: '18px',
                          md: '18px',
                          lg: '20px',
                          xl: '22px',
                          xxl: '24px',
                          xxxl: '32px',
                        }}
                        lineHeight="150%"
                        color="#1F1F1F"
                      >
                        {TaskerData.TaskerName}
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        lineHeight="150%"
                        color="#1F1F1F"
                      >
                        {TaskerData.TaskerReviews}
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        lineHeight="150%"
                        color="#1F1F1F"
                      >
                        {TaskerData.CompletedTasks}
                      </Text>
                    </Box>
                  </Flex>

                  <Box py="20px" borderBottom="1px solid #BFB3B3">
                    <Text
                      fontWeight="600"
                      fontSize={{
                        base: '18px',
                        md: '18px',
                        lg: '20px',
                        xl: '22px',
                        xxl: '24px',
                      }}
                      lineHeight="150%"
                      color="#1F1F1F"
                      mb="16px"
                    >
                      Featured Skills
                    </Text>
                    <Flex
                      mb="18px"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        lineHeight="150%"
                        color="#1F1F1F"
                      >
                        Help Moving
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        lineHeight="150%"
                        color="#1F1F1F"
                      >
                        {TaskerData.MovingRate}
                      </Text>
                    </Flex>
                    <Flex
                      mb="18px"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        lineHeight="150%"
                        color="#1F1F1F"
                      >
                        Home Repairs
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        lineHeight="150%"
                        color="#1F1F1F"
                      >
                        {TaskerData.RepairRate}
                      </Text>
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        lineHeight="150%"
                        color="#1F1F1F"
                      >
                        Furniture Assembly
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        lineHeight="150%"
                        color="#1F1F1F"
                      >
                        {TaskerData.AssemblyRate}
                      </Text>
                    </Flex>
                  </Box>
                  <Box pt="18px">
                    <Text
                      fontWeight="600"
                      fontSize={{
                        base: '18px',
                        md: '18px',
                        lg: '20px',
                        xl: '22px',
                        xxl: '24px',
                      }}
                      lineHeight="150%"
                      color="#1F1F1F"
                      mb="10px"
                    >
                      I'm the right person for the job:
                    </Text>
                    <Text
                      fontWeight="500"
                      fontSize={{
                        base: '14px',
                        md: '16px',
                        lg: '20px',
                      }}
                      lineHeight="150%"
                      color="#1F1F1F"
                    >
                      {TaskerData.Description}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    );
  }
}
