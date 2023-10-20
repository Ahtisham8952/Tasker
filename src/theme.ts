import '@fontsource/poppins';
import { extendTheme } from '@chakra-ui/react';

const TaskerTheme = extendTheme({
  colors: {
    primary: '#258CEC',
    secondry: '#6943FF',
  },
  components: {
    Tabs: {
      variants: {
        line: {
          tab: {
            color: '#FFFFFF',
            borderBottom: 'none',
            _selected: {
              borderColor: '#1673FF',
              borderBottom: '4px solid #1673FF',
              color: '#1673FF',
            },
          },
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          bg: 'transparent',
          _checked: {
            bg: 'black',
          },
        },
      },
    },
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '991px',
    xl: '1280px',
    xxl: '1440px',
    xxxl: '1660px',
  },
  fonts: {
    dinFonts: '"D-DIN", sans-serif',
    body: '"Montserrat", sans-serif',
    raleway: '"Raleway", sans-serif',
    rajdhaniFont: '"Rajdhani", sans-serif',
  },
});

export default TaskerTheme;
