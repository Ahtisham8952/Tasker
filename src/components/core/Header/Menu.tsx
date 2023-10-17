import {
  Box,
  Button,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { useState } from 'react';
// import MenuCollapseComponent from './MenuCollapse';
// import MenuMainLink from './MenuMainLink';

const tradeLinks = [
  {
    id: 1,
    text: 'Swap',
    link: '#',
  },
  {
    id: 2,
    text: 'Liquidity',
    link: '#',
  },
  {
    id: 3,
    text: 'Bridge',
    link: '#',
  },
];
const FinancialPools = [
  {
    id: 1,
    text: 'Entertainment Pools',
    link: '#',
  },
  {
    id: 2,
    text: 'Bonanza Pools',
    link: '#',
  },
  {
    id: 3,
    text: 'Ranking Pools',
    link: '#',
  },
  {
    id: 3,
    text: 'Cerberus pools',
    link: '#',
  },
  {
    id: 4,
    text: 'Enochian Pools',
    link: '#',
  },
];
const Entertainment = [
  {
    id: 1,
    text: 'Popular',
    link: '#',
  },
  {
    id: 2,
    text: 'Wheels',
    link: '#',
  },
  {
    id: 3,
    text: 'Slots',
    link: '#',
  },
  {
    id: 3,
    text: 'Games',
    link: '#',
  },
  {
    id: 3,
    text: 'Keno',
    link: '#',
  },
  {
    id: 3,
    text: 'Promotions',
    link: '#',
  },
];
const Personal = [
  {
    id: 1,
    text: 'Avatar Labs',
    link: '#',
  },
  {
    id: 2,
    text: 'Membership',
    link: '#',
  },
  {
    id: 3,
    text: 'Gift card',
    link: '#',
  },
  {
    id: 3,
    text: 'Billing',
    link: '#',
  },
  {
    id: 3,
    text: 'Monetization',
    link: '#',
  },
  {
    id: 3,
    text: 'Ranking',
    link: '#',
  },
  {
    id: 3,
    text: 'Bonanza',
    link: '#',
  },
  {
    id: 3,
    text: 'Affiliate',
    link: '#',
  },
];
const MenuComponent = () => {
  const [isImgColor, setisImgcolor] = useState(false);
  const handleHoverColor = () => {
    setisImgcolor((prev) => !prev);
  };
  return (
    <>
      <Box
        position="relative"
        width="24px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Popover placement="top-start">
          <PopoverTrigger>
            <Button
              p={'0px'}
              m={'0px'}
              bg={'transparent'}
              _hover={{ bg: 'transparent', opacity: '0.8' }}
              _focus={{ bg: 'transparent' }}
            >
              <Image
                src="https://cdn.enochdev.com/starget-bucket/header-menu/menu-icon.svg"
                alt=""
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent borderRadius={'0px'} top={'15px'}>
            <PopoverBody p={'0px'} borderRadius={'0px'}>
              {/* <MenuMainLink
                menuLinkImg="https://cdn.enochdev.com/starget-bucket/header-menu/dashboard.svg"
                menuItem="Dashboard"
                menuUrl="#"
              />
              <MenuCollapseComponent
                links={tradeLinks}
                btnText="Trade"
                btnImg="https://cdn.enochdev.com/starget-bucket/header-menu/trade-icon.svg"
              />
              <MenuCollapseComponent
                links={FinancialPools}
                btnText="Financial Pools"
                btnImg="https://cdn.enochdev.com/starget-bucket/header-menu/financial-pools-icon.svg"
              />
              <MenuCollapseComponent
                links={Entertainment}
                btnText="Entertainment"
                btnImg="https://cdn.enochdev.com/starget-bucket/header-menu/entertainment-icon.svg"
              />
              <MenuCollapseComponent
                links={Personal}
                btnText="Personal"
                btnImg="https://cdn.enochdev.com/starget-bucket/header-menu/personal-icon.svg"
              /> */}
              {/* <MenuMainLink
                menuLinkImg="https://cdn.enochdev.com/starget-bucket/header-menu/calendar.svg"
                menuItem="Calendar"
                menuUrl="#"
              /> */}
              {/* <MenuMainLink
                menuLinkImg="https://cdn.enochdev.com/starget-bucket/header-menu/calendar.svg"
                menuItem="Membership"
                menuUrl="#"
              /> */}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
};

export default MenuComponent;
