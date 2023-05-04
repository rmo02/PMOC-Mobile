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
        400: '#059669',
        300: '#10B981',
        200: '#00B37E',
      },
      gray: {
        700: '#121214',
        600: '#202024',
        500: '#29292E',
        450: '#64748B',
        400: '#323238',
        300: '#7C7C8A',
        250: '#C5C5C7',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },
      white: '#FFFFFF',
      red: {
        500: '#F75A68'
      },
      blue: {
        200: '#3A9DF9',
        300: '#0EA5E9',
        600: '#3963F9',
        700: '#1D4ED8',
      },
      roxo:{
        300: '#3A9DF9',
        500: '#4839F9'
      },
      yellow:{
        500:'#F59E0B'
      },
      fundo:'#EFF6FF'
    },
    fonts: {
      regular: 'Lato_400Regular',
      bold: 'Lato_700Bold',
      button: 'Inter_500Medium'
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