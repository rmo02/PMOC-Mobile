import { extendTheme } from 'native-base';

export const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

export const THEME = extendTheme({
    colors: {
      green: {
        700: '#00875F',
        500: '#00B37E',
      },
      gray: {
        700: '#121214',
        600: '#202024',
        500: '#29292E',
        400: '#323238',
        300: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6'
      },
      white: '#FFFFFF',
      red: {
        500: '#F75A68'
      },
      blue: {
        300: '#1E1E1E',
        500: '3B82F6',
        700: '#1D4ED8'
      },
      roxo:{
        300: '#3A9DF9',
        500: '#4839F9'
      },
      fundo:'#EFF6FF'
    },
    fonts: {
      regular: 'Lato_400Regular',
      bold: 'Lato_700Bold',
      buttom: 'Inter_500Medium'
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
    },
    sizes: {
      14: 56,
      33: 148
    }
  })