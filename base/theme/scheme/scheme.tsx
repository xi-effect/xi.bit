import { PaletteMode } from '@mui/material';

const typography = {
  htmlFontSize: 10,
  fontFamily: 'Inter, Arial',
};

const breakpoints = {
  keys: ['ax', 'xs', 'sm', 'md', 'dl', 'lg', 'gx', 'xl', 'lp'],
  values: {
    ax: 0,
    xs: 240,
    sm: 480,
    md: 720,
    dl: 980,
    lg: 1200,
    gx: 1536,
    xl: 1980,
    lp: 2200,
  },
};

const paletteLight = {
  mode: 'light',
  primary: {
    dark: '#445AFF', // blue.100
    main: '#697BFF', // blue.80
    light: '#B4BDFF', // blue.40
    pale: '#ECEFFF', // blue.10
  },
  secondary: {
    dark: '#9769FF', // purple.100
    main: '#BD9FFF', // blue.80
    light: '#EEE7FF', // blue.40
    pale: '#F5F0FF', // blue.10
  },
  gray: {
    100: '#000000',
    80: '#333333',
    40: '#999999',
    10: '#E6E6E6',
    0: '#FFFFFF',
  },
  success: {
    dark: '#39EF84',
    main: '#61F29D',
    light: '#B0F9CE',
    pale: '#EBFDF3',
  },
  error: {
    dark: '#F42D2D',
    main: '#F65757',
    light: '#FBABAB',
    pale: '#FEEAEA',
  },
};

const paletteDark = {
  mode: 'dark',
  primary: {
    dark: '#445AFF', // blue.100
    main: '#697BFF', // blue.80
    light: '#B4BDFF', // blue.40
    pale: '#ECEFFF', // blue.10
  },
  secondary: {
    dark: '#9769FF', // purple.100
    main: '#BD9FFF', // blue.80
    light: '#EEE7FF', // blue.40
    pale: '#F5F0FF', // blue.10
  },
  gray: {
    100: '#000000',
    80: '#333333',
    40: '#999999',
    10: '#E6E6E6',
    0: '#FFFFFF',
  },
  success: {
    dark: '#39EF84',
    main: '#61F29D',
    light: '#B0F9CE',
    pale: '#EBFDF3',
  },
  error: {
    dark: '#F42D2D',
    main: '#F65757',
    light: '#FBABAB',
    pale: '#FEEAEA',
  },
};

export function getScheme(mode: 'light' | 'dark') {
  const colorPalette = mode === 'light' ? paletteLight : paletteDark;

  const theme = {
    typography: {
      ...typography,
    },
    breakpoints: {
      ...breakpoints,
    },
    palette: {
      ...colorPalette,
    },
  };

  return theme;
}
